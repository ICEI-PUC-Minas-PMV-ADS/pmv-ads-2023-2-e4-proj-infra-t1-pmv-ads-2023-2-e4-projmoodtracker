
import { TouchableOpacity, View, Image, ScrollView, Text, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { COLORS } from "../../themes/colors";
import { LOGO_HOME } from "../../themes/images";
import { sizeParse } from "../../assets/functions/functions";
import { Ionicons } from '@expo/vector-icons';
import FAIcon from '@expo/vector-icons/FontAwesome5';
import { FONTS } from "../../themes/fonts";
import { useEffect, useState } from "react";
import { ButtonSair, ButtonSalvar } from "./style";
import { TextLogin } from "../../components/Input/style";
import { Logout_Redirect, getAuthorizationId, getAuthorizationToken } from "../../storage/authStorage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { setModalAction } from "../../store/reducers/globalReducer";
import axios from "axios";
import moment from "moment";

function enumHumor(numberHumor) {
    if (numberHumor == 0) {
        return "Seu humor: "
    }

    if (numberHumor == 5) {
        return <View style={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <FAIcon name="sad-cry" size={40} color="white" />
            <Text style={{color: COLORS.white}}>"Muito Triste"</Text>
        </View>
    }

    if (numberHumor == 4) {
        return <View style={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <Ionicons name="ios-sad-outline" size={40} color="white" />
            <Text style={{color: COLORS.white}}>"Triste"</Text>
        </View>
    }

    if (numberHumor == 3) {
        return <View style={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <FAIcon name="meh" size={35} color="white" />
            <Text style={{color: COLORS.white}}>"Nêutro"</Text>
        </View>
    }

    if (numberHumor == 2) {
        return <View style={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <Ionicons name="happy-outline" size={40} color="white" />
            <Text style={{color: COLORS.white}}>"Feliz!"</Text>
        </View>

    }

    if (numberHumor == 1) {
        return <View style={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
            <FAIcon name="laugh-squint" size={40} color="white" />
            <Text style={{color: COLORS.white}}>"Muito Feliz!"</Text>
        </View>

    }


};


const Configuracoes = () => {
    const [nomeCompleto, setNomeCompleto] = useState<string>('');
    const [dataNascimento, setDataNascimento] = useState<string>('');
    const [apelido, setApelido] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [notaDia, setNotaDia] = useState('');
    const [humor, setHumor] = useState([]);
    const [mediaHumor, setMediaHumor] = useState(0);
    const [registros, setRegistros] = useState([]);


    const user = useSelector((state: RootState) => state.userReducer.user);
    const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
    const dispatch = useDispatch();

    useEffect(() => {
        const soma = humor.reduce((acumulador, numero) => acumulador + numero, 0);
        const mediaCalculada = Math.round(soma / humor.length);

        setMediaHumor(mediaCalculada);

    }, [humor])

    useEffect(() => {
        setLoading(false);
        getNotas();
        getRegistros();
    }, []);

    async function getRegistros() {
        const token = await getAuthorizationToken();
        const userstorage = await getAuthorizationId();
        const usuario = !!user ? user : userstorage;
        console.log(token);
        try {
            const response = await axios.get(`https://3f80-2804-d45-9911-9b00-398f-75dc-95fc-dd83.ngrok-free.app/api/Registros/Username/${usuario}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const registrosOrdenados = response.data.sort((a: { data: string }, b: { data: string }) =>
                new Date(b.data).getTime() - new Date(a.data).getTime()
            );

            setRegistros(registrosOrdenados);

            const numerosHumor = registrosOrdenados.map(registro => registro.humor);

            setHumor(numerosHumor);

        } catch (error) {
            console.error('Houve um erro durante a solicitação:', error);
            throw error; // opcional: propagar o erro para quem chamou a função
        }
    }

    async function getNotas() {

        const token = await getAuthorizationToken();

        axios.get(`https://3f80-2804-d45-9911-9b00-398f-75dc-95fc-dd83.ngrok-free.app/api/NotaMensal`, {
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


    const _handleLogout = () => {
        setLoading(true);


        setTimeout(() => {
            Logout_Redirect(navigate);
        }, 1500);
    }

    const mostrarNotaDoMes = () => {
        dispatch(setModalAction({ visible: true, title: 'A mensagem do dia para você...', text: `"${!!notaDia ? notaDia : 'Não há registros encontrados!'}..."` }));
    }


    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <View style={{ flex: 0.8, width: '100%', alignItems: 'center', justifyContent: 'space-around', backgroundColor: COLORS.primary, flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{ paddingTop: sizeParse(25), paddingHorizontal: sizeParse(10), alignItems: 'center', justifyContent: 'center' }}
                    onPress={() => { 
                        navigate('Inicio');
                    }}>
                    <FAIcon name="arrow-left" size={40} color="white" />
                </TouchableOpacity>
                <View style={{ marginLeft: sizeParse(25), flexDirection: 'row' }}>
                    <Image source={LOGO_HOME} resizeMode="contain" style={{ width: 300, height: 200, paddingLeft: sizeParse(20) }} />

                </View>
            </View>

            <View style={{ flex: 4, width: '100%', alignItems: 'flex-start', justifyContent: 'flex-start', backgroundColor: COLORS.primary, gap: 20 }}>
                <View style={{ width: '100%', alignItems: "center", justifyContent: 'center', paddingTop: sizeParse(20) }}>
                    <Text style={{ fontFamily: FONTS.regular, fontSize: 30, color: COLORS.white }}>Olá, {!!user ? user : 'Usuário'}! :)</Text>
                </View>

                <View style={{ width: '100%' }}>
                    <View style={{ alignItems: "center", justifyContent: 'center', paddingTop: sizeParse(20), flexDirection: 'row' }}>
                        <Text style={{ fontFamily: FONTS.bold, fontSize: 30, color: COLORS.white }}>Humor do Mês: </Text>
                        <Text style={{ fontFamily: FONTS.regular, fontSize: 30, color: COLORS.white }}>{enumHumor(mediaHumor)}</Text>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: 'center', paddingTop: sizeParse(20), flexDirection: 'row' }}>
                        <Text style={{ fontFamily: FONTS.bold, fontSize: 30, color: COLORS.white }}>Qntd Registros: </Text>
                        <Text style={{ fontFamily: FONTS.regular, fontSize: 30, color: COLORS.white }}>{!!registros ? registros.length : 'N/A'}</Text>
                    </View>
                </View>


                <View style={{ gap: 40, width: '100%', paddingTop: sizeParse(100) }}>
                    <View style={{ paddingHorizontal: sizeParse(30) }}>
                        <ButtonSalvar style={{ padding: 10 }} onPress={mostrarNotaDoMes} >
                            <TextLogin style={{ fontSize: 20 }}>
                                Nota do dia
                            </TextLogin>
                        </ButtonSalvar>
                    </View>

                    <View style={{ paddingHorizontal: sizeParse(30) }}>
                        <ButtonSair style={{ padding: 10 }} onPress={_handleLogout}>
                            <TextLogin style={{ fontSize: 20 }}>
                                Sair
                            </TextLogin>
                        </ButtonSair>
                    </View>
                </View>
            </View>



        </View >
    )
}


export default Configuracoes;