import { View, TouchableOpacity, Text, Image, ScrollView } from "react-native";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { COLORS } from "../../themes/colors";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { getAuthorizationId, getAuthorizationToken } from "../../storage/authStorage";
import { useEffect, useState } from "react";
import { LOGO_HOME } from "../../themes/images";
import { sizeParse } from "../../assets/functions/functions";
import { Ionicons } from '@expo/vector-icons';
import { FONTS } from "../../themes/fonts";
import axios from "axios";
import FAIcon from '@expo/vector-icons/FontAwesome5';
import { setUserAction } from "../../store/reducers/userReducer";
import { setModalAction } from "../../store/reducers/globalReducer";


const Home = ({ route }) => {
    const user = useSelector((state: RootState) => state.userReducer.user);
    const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

    const { refresh } = route.params || {};

    const [loading, setLoading] = useState<boolean>(false);
    const [registros, setRegistros] = useState([]);
    const [notaDia, setNotaDia] = useState('');
    const [humor, setHumor] = useState([]);
    const dispatch = useDispatch();
    const [numberMes, setNumberMes] = useState(0);
    const [pesquisa, setPesquisa] = useState(false);


    const [modalFiltro, setModalFiltro] = useState(false);

    const monthMap = {
        1: 'JAN',
        2: 'FEV',
        3: 'MAR',
        4: 'ABR',
        5: 'MAI',
        6: 'JUN',
        7: 'JUL',
        8: 'AGO',
        9: 'SET',
        10: 'OUT',
        11: 'NOV',
        12: 'DEZ',
    };


    const MesesFiltro = {
        0: 'TUDO',
        1: 'JAN',
        2: 'FEV',
        3: 'MAR',
        4: 'ABR',
        5: 'MAI',
        6: 'JUN',
        7: 'JUL',
        8: 'AGO',
        9: 'SET',
        10: 'OUT',
        11: 'NOV',
        12: 'DEZ',
    };

    useEffect(() => {
        getRegistros();
    }, [refresh]);

    useEffect(() => {
        setLoading(false);
        getUserInfo();
        getRegistros();
        getNotas();
    }, []);


    const _handleNavitagateConfig = () => {
        navigate('Configuracoes');
    }

    function _handleEditar(idRegistro) {
        navigate('EditarNote', { idReg: idRegistro });
    }

    function _abrirModalFiltro() {
        setModalFiltro(!modalFiltro);
        setPesquisa(false);
    }

    function handleMonthClick(mes) {
        setNumberMes(mes);
        setPesquisa(true);
    }

    async function getUserInfo() {
        const token = await getAuthorizationToken();
        const userstorage = await getAuthorizationId();
        const usuario = !!user ? user : userstorage;

        try {
            const response = await axios.get(`https://1aba-2804-b54-2300-5845-a0c7-6229-e3aa-2bf8.ngrok.io/api/Usuarios/${usuario}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log('Informações do usuário obtidas com sucesso:', response.data);
            dispatch(setUserAction(usuario));
        } catch (error) {
            console.error('Houve um erro durante a solicitação:', error);
            throw error; // opcional: propagar o erro para quem chamou a função
        }
    }

    async function getNotas() {

        const token = await getAuthorizationToken();

        axios.get(`https://1aba-2804-b54-2300-5845-a0c7-6229-e3aa-2bf8.ngrok.io/api/NotaMensal`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                const dataAtual = new Date();  //data de hj
                const notas = response.data;

                for (const nota of notas) {
                    const dataNota = new Date(nota.data); // pega a nota e converte

                    if (dataNota.toDateString() === dataAtual.toDateString()) {
                        setNotaDia(nota.nota);
                        break; // Se encontrar a nota do dia, encerra o loop.
                    }
                }
            })
            .catch(error => {
                console.error('Houve um erro durante a solicitação:', error);
            });
    }

    async function getRegistros() {
        const token = await getAuthorizationToken();
        const userstorage = await getAuthorizationId();
        const usuario = !!user ? user : userstorage;
        try {
            const response = await axios.get(`https://1aba-2804-b54-2300-5845-a0c7-6229-e3aa-2bf8.ngrok.io/api/Registros/Username/${usuario}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const registrosOrdenados = response.data.sort((a: { data: string }, b: { data: string }) =>
                new Date(b.data).getTime() - new Date(a.data).getTime()
            );



            // Defina os registros ordenados no estado ou variável que você está usando
            setRegistros(registrosOrdenados);

            const numerosHumor = registrosOrdenados.map(registro => registro.humor);

            setHumor(numerosHumor);

        } catch (error) {
            console.error('Houve um erro durante a solicitação:', error);
            throw error; // opcional: propagar o erro para quem chamou a função
        }
    }

    const RegistroItem = ({ dataDia, titulo, texto, mes, id }) => (
        <TouchableOpacity style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginBottom: sizeParse(20) }} onPress={() => _handleEditar(id)}>
            <View style={{ width: '25%', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, textAlign: 'center', fontFamily: FONTS.bold }}>{dataDia} {mes}</Text>
            </View>
            <View style={{ width: '75%', alignItems: 'flex-start', justifyContent: 'center', paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 16, fontFamily: FONTS.bold }}>{titulo}</Text>
                <Text numberOfLines={4} ellipsizeMode="tail" style={{ fontSize: 14, fontFamily: FONTS.regular }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary, width: '100%' }}>
            <View style={{ flex: 0.8, width: '100%', alignItems: 'center', justifyContent: 'space-around', backgroundColor: COLORS.primary, flexDirection: 'row', paddingHorizontal: 40 }}>
                <TouchableOpacity style={{ paddingTop: sizeParse(25), alignItems: 'center', justifyContent: 'center' }} onPress={_handleNavitagateConfig}>
                    <Ionicons name="md-reorder-three-outline" size={40} color="white" />
                </TouchableOpacity>
                <View style={{ marginLeft: sizeParse(90), flexDirection: 'row' }}>
                    <Image source={LOGO_HOME} resizeMode="contain" style={{ width: 300, height: 200, paddingLeft: sizeParse(20) }} />

                </View>
                <TouchableOpacity style={{ paddingTop: sizeParse(25), alignItems: 'center', justifyContent: 'center', paddingRight: 10 }} onPress={_abrirModalFiltro}>
                    <FAIcon name={!!modalFiltro ? "home" : "filter"} size={30} color="white" />
                </TouchableOpacity>
            </View>


            <View style={{ flex: 0.3, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.gray80, flexDirection: 'row', paddingHorizontal: sizeParse(15) }}>

                {!!modalFiltro
                    ?
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}
                        contentContainerStyle={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", gap: sizeParse(15) }}>
                            {Object.values(MesesFiltro).map((month, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handleMonthClick(index)}
                                    style={{ backgroundColor: COLORS.white, borderRadius: sizeParse(10), width: sizeParse(50), height: sizeParse(40), alignItems: 'center', justifyContent: 'center' }}// manda pra função o numero do mes
                                >
                                    <Text style={{ fontFamily: FONTS.bold, fontSize: 15 }}>{month}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>

                    :
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ flexDirection: 'row' }}>
                        <Text style={{ fontFamily: FONTS.bold, fontSize: 15 }}> Nota do mês: </Text>
                        <Text style={{ fontFamily: FONTS.regular, fontSize: 15, color: COLORS.white }}> {!!notaDia ? notaDia : 'Não possui notas registradas!'} </Text>
                    </ScrollView>
                }

            </View>


            <View style={{ flex: 4, width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: COLORS.white, gap: 20, paddingBottom: sizeParse(80) }}>
                <ScrollView>
                    {!!pesquisa

                        ?
                        registros
                            .filter(registro => numberMes === 0 || new Date(registro.data).getMonth() + 1 === numberMes)
                            .map((registro) => (
                                <RegistroItem
                                    key={registro.id.toString()}
                                    dataDia={registro.data.substring(8, 10)}
                                    mes={monthMap[new Date(registro.data).getMonth() + 1]}
                                    titulo={registro.titulo}
                                    texto={registro.texto}
                                    id={registro.id}
                                />
                            ))


                        :

                        registros
                            .map((registro) => (
                                <RegistroItem
                                    key={registro.id.toString()}
                                    dataDia={registro.data.substring(8, 10)}
                                    mes={monthMap[new Date(registro.data).getMonth() + 1]}
                                    titulo={registro.titulo}
                                    texto={registro.texto}
                                    id={registro.id}
                                />
                            ))

                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default Home;                                                                                                                 