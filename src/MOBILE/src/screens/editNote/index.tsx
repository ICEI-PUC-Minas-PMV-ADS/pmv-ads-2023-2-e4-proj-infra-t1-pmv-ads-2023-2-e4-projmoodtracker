
import { TouchableOpacity, View, Image, ScrollView, Text, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { COLORS } from "../../themes/colors";
import { LOGO_HOME } from "../../themes/images";
import { sizeParse } from "../../assets/functions/functions";
import { Ionicons } from '@expo/vector-icons';
import { FONTS } from "../../themes/fonts";
import InputRegister from "../../components/InputRegister/Input";
import React, { useEffect, useState } from "react";
import { ButtonSalvar } from "./style";
import { TextLogin } from "../../components/Input/style";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import FAIcon from '@expo/vector-icons/FontAwesome5';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import axios from "axios";
import { getAuthorizationToken } from "../../storage/authStorage";
import { setModalAction } from "../../store/reducers/globalReducer";


const EditNote = ({ route }) => {
    const user = useSelector((state: RootState) => state.userReducer.user);
    const { idReg } = route.params || {};
    const dispatch = useDispatch();
    const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
    const [titulo, setTitulo] = useState('');
    const [texto, setTexto] = useState('');
    const [humor, setHumor] = useState(0);
    const [regFeliz, setRegFeliz] = useState('');
    const [regTriste, setRegTriste] = useState('');
    const dataHoje = new Date();

    const formData = {
        id: idReg,
        titulo: titulo,
        texto: texto,
        humor: humor,
        regFeliz: regFeliz,
        regTriste: regTriste,
        usuario: user,
      };
    
    useEffect(() => {
        getReg();
    }, []);

    async function getReg() {
        const token = await getAuthorizationToken();

        axios.get(`https://1aba-2804-b54-2300-5845-a0c7-6229-e3aa-2bf8.ngrok.io/api/Registros/${idReg}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => {
            setHumor(response.data.humor);
            setRegFeliz(response.data.regFeliz);
            setRegTriste(response.data.regTriste);
            setTexto(response.data.texto);
            setTitulo(response.data.titulo);
          })
          .catch(error => {
            console.error('Houve um erro durante a solicitação:', error.response.data);
            dispatch(setModalAction({ visible: true, title: 'ERRO', text: `${error.response.data}` }));
          });
      }

    async function enviarRegistro() {
        const token = await getAuthorizationToken();

        if (titulo == '') {
            dispatch(setModalAction({ visible: true, title: 'Campo Vazio', text: 'Por favor, insira um título para o seu registro.' }));
            return;
        }

        if (texto == '') {
            dispatch(setModalAction({ visible: true, title: 'Campo Vazio', text: 'Por favor, descreva como se sente.' }));
            return;
        }

        if (humor == 0) {
            dispatch(setModalAction({ visible: true, title: 'Campo Vazio', text: 'Por favor, selecione o seu humor hoje.' }));
            return;
        }


        axios.put(`https://1aba-2804-b54-2300-5845-a0c7-6229-e3aa-2bf8.ngrok.io/api/Registros/${idReg}`, formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                setHumor(0);
                setRegFeliz('');
                setRegTriste('');
                setTexto('');
                setTitulo('');

                navigate('Inicio', { refresh: false });
                dispatch(setModalAction({ visible: true, title: 'MoodTracker', text: 'Seu registro foi atualizado com sucesso!' }));
            })
            .catch(error => {
                console.error('Houve um erro durante a solicitação:', error.response.data);
                dispatch(setModalAction({ visible: true, title: 'ERRO', text: `${error.response.data}` }));
            });
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
           <View style={{ flex: 0.5, width: '100%', alignItems: 'center', justifyContent: 'space-around', backgroundColor: COLORS.primary, flexDirection: 'row' }}>
                <TouchableOpacity style={{ paddingTop: sizeParse(25), paddingHorizontal: sizeParse(10), alignItems: 'center', justifyContent: 'center' }} onPress={() => { navigate('Home') }}>
                    <FAIcon name="arrow-left" size={30} color="white" />
                </TouchableOpacity>
                <View style={{ marginLeft: sizeParse(25), flexDirection: 'row' }}>
                    <Image source={LOGO_HOME} resizeMode="contain" style={{ width: 300, height: 200, paddingLeft: sizeParse(20) }} />
                </View>
            </View>

            <View style={{ flex: 4, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.grayLight, gap: 15 }}>
                <ScrollView>
                    <View style={{ width: '100%', alignItems: "center", justifyContent: 'center', paddingVertical: sizeParse(10) }}>
                        <Text style={{ fontFamily: FONTS.bold, fontSize: 30 }}>Editando registro</Text>
                    </View>

                    <View style={{ gap: 10, width: '100%' }}>
                        <InputRegister
                            value={titulo}
                            placeholder="Título"
                            onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                                const titulo2 = event.nativeEvent.text;
                                setTitulo(titulo2);
                            }}
                        />
                        <InputRegister
                            placeholder="Digite seu texto aqui"
                            multiline={true}
                            numberOfLines={10} // Você pode ajustar o número de linhas conforme necessário
                            onChangeText={(inputText) => setTexto(inputText)}
                            value={texto}
                        />
                        <InputRegister
                            value={regFeliz}
                            placeholder="O que me deixou feliz hoje? :)"
                            onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                                const user = event.nativeEvent.text;
                                setRegFeliz(user);
                            }}
                        />
                        <InputRegister
                            value={regTriste}
                            placeholder="O que me deixou triste hoje? :("
                            onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                                const user = event.nativeEvent.text;
                                setRegTriste(user);
                            }}
                        />
                        <View style={{ width: '100%', paddingHorizontal: sizeParse(30), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontFamily: FONTS.regular, fontSize: 15 }}> Clique em como se sente hoje: </Text>
                        </View>

                        <View style={{ width: '100%', paddingHorizontal: sizeParse(30), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TouchableOpacity style={{ width: 60, flexDirection: "column", alignItems: 'center' }} onPress={() => { setHumor(1) }}>
                                    <FAIcon name="laugh-squint" size={35} color={humor == 1 ? 'green' : COLORS.primary} />
                                    <Text style={{ color: humor == 1 ? 'green' : COLORS.white, fontSize: 12 }}>Muito Feliz</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: 60, flexDirection: "column", alignItems: 'center' }} onPress={() => { setHumor(2) }}>
                                    <Ionicons name="happy-outline" size={35} color={humor == 2 ? 'green' : COLORS.primary} />
                                    <Text style={{ color: humor == 2 ? 'green' : COLORS.white }}>Feliz</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: 60, flexDirection: "column", alignItems: 'center' }} onPress={() => { setHumor(3) }}>
                                    <FAIcon name="meh" size={35} color={humor == 3 ? 'green' : COLORS.primary} />
                                    <Text style={{ color: humor == 3 ? 'green' : COLORS.white }}>Nêutro</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: 60, flexDirection: "column", alignItems: 'center' }} onPress={() => { setHumor(4) }}>
                                    <Ionicons name="ios-sad-outline" size={35} color={humor == 4 ? 'green' : COLORS.primary} />
                                    <Text style={{ color: humor == 4 ? 'green' : COLORS.white }}>Triste</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flexDirection: "column", alignItems: 'center' }} onPress={() => { setHumor(5) }}>
                                    <FAIcon name="sad-cry" size={35} color={humor == 5 ? 'green' : COLORS.primary} />
                                    <Text style={{ color: humor == 5 ? 'green' : COLORS.white }}>Muito Triste</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ width: '100%', paddingHorizontal: sizeParse(30), paddingBottom: sizeParse(50)}}>
                            <ButtonSalvar style={{ padding: 10 }} onPress={enviarRegistro}>
                                <TextLogin style={{ fontSize: 20 }}>
                                    Salvar
                                </TextLogin>
                            </ButtonSalvar>
                        </View>

                    </View>
                </ScrollView>
            </View>

        </View >
    )
}


export default EditNote;
