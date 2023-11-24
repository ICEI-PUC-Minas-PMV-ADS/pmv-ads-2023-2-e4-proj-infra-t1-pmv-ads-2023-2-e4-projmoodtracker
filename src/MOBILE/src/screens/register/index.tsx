
import { ButtonEnviarFoto, ButtonLogar, ButtonLogarDesativado, ContainerRegister } from "./style";
import Input from "../../components/Input/Input";
import { View, NativeSyntheticEvent, TextInputChangeEventData, TouchableOpacity, Text, ScrollView } from "react-native";
import { TextLogin, TextRegistrar1, TextRegistrar2, TitleLogin } from "../../components/Input/style";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";
import { COLORS } from "../../themes/colors";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import LoadingComponent from "../../components/loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setModalAction } from "../../store/reducers/globalReducer";
import { RegisterTypesI } from "../../types/loginTypes";
import validarEmail from 'email-validator';
import { sizeParse } from "../../assets/functions/functions";
import InputRegister from "../../components/InputRegister/Input";
import { TextInputMask } from "react-native-masked-text";
import axios from "axios";


const Register = () => {

    const modal = useSelector((state: RootState) => state.globalReducer.modal);
    const dispatch = useDispatch();

    const [email, setEmail] = useState<string>('');
    const [nomeCompleto, setNomeCompleto] = useState<string>('');
    const [dataNascimento, setDataNascimento] = useState<string>('');
    const [apelido, setApelido] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setconfirmPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>('');
    const [buttonDisable, setButtonDisable] = useState<boolean>(false);

    const [image, setImage] = useState<string>('');

    const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

    const _Registrado = () => {
        navigate('Login');
    }

    //useEffect para verificar cada campo e liberar o botão de cadastrar
    useEffect(() => {
        if (email !== '' && nomeCompleto !== '' && email !== '' && password !== '' && confirmPassword !== '') {
            setButtonDisable(true);
        } else {
            setButtonDisable(false);
        }
    }, [email, nomeCompleto, email, password, confirmPassword])


    async function _handleCadastro() {
        setLoading(true);

        if (validarEmail.validate(email) == false) {
            dispatch(setModalAction({ visible: true, title: 'Opa!', text: 'Email inválido!' }))
            setLoading(false);
            return
        }

        if (password != confirmPassword) {
            dispatch(setModalAction({ visible: true, title: 'ERROR:', text: 'As senhas estão diferentes, verifique e tente novamente!' }))
            setLoading(false);
            return
        }


        const requestData = {
            username: apelido,
            nome: nomeCompleto,
            nomeAlt: apelido,
            email: email,
            senha: password
        };

        const response = await axios.post('https://ecda-2804-d45-9911-9b00-5c78-ef70-1035-ac39.ngrok-free.app/api/Usuarios', requestData);

        //Verificação da requisição SUCESSO OU NAO
        if (response.status == 201) {
            setLoading(false);
            dispatch(setModalAction({ visible: true, title: 'MOOD TRACKER', text: 'Cadastro efetuado com sucesso!' }))
            _Registrado();
        } else {
            dispatch(setModalAction({ visible: true, title: 'ERROR:', text: 'Ocorreu algum erro, tente novamente mais tarde!' }))
        }
    }


    return (
        <ScrollView style={{ backgroundColor: COLORS.primary }}>
            <ContainerRegister>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <TitleLogin>
                        Cadastro
                    </TitleLogin>
                    <TextLogin>
                        Digite o seus dados para criar uma conta de usuário.
                    </TextLogin>
                </View>

                <View style={{ gap: 10, width: '100%' }}>
                    <InputRegister
                        value={nomeCompleto}
                        placeholder="Seu nome"
                        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                            const user = event.nativeEvent.text;
                            setNomeCompleto(user);
                        }}
                    />
                    <InputRegister
                        value={apelido}
                        placeholder="Como gostaria de ser chamado? (Opcional)"
                        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                            const user = event.nativeEvent.text;
                            setApelido(user);
                        }}
                    />

                    <View style={{ paddingHorizontal: 30 }}>
                        <View style={{ width: '100%', paddingHorizontal: 15, backgroundColor: COLORS.white, borderRadius: 20, borderWidth: 1, borderColor: COLORS.gray80 }}>
                            <TextInputMask
                                style={{
                                    borderRadius: 10, padding: 15, backgroundColor: 'rgba(0,0,0,0)', alignItems: 'flex-start',
                                    justifyContent: 'flex-start'
                                }}
                                type="datetime"
                                options={{
                                    format: 'DD/MM/YYYY'
                                }}
                                value={dataNascimento}
                                placeholder="Data de nascimento"
                                onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                                    const user = event.nativeEvent.text;
                                    setDataNascimento(user);
                                }}
                                placeholderTextColor={COLORS.gray80}
                            />
                        </View>
                    </View>




                    <InputRegister
                        value={email}
                        placeholder="Email..."
                        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                            const user = event.nativeEvent.text;
                            setEmail(user);
                        }}
                    />


                    <InputRegister
                        value={password}
                        isPassword
                        placeholder="Digite sua senha..."
                        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                            const password = event.nativeEvent.text;
                            setPassword(password);
                            setMessageError('');
                        }}
                        errorMessage={messageError}
                    />

                    <InputRegister
                        value={confirmPassword}
                        title="Confirme a senha"
                        isPassword
                        placeholder="Digite sua senha..."
                        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                            const confirmPassword = event.nativeEvent.text;
                            setconfirmPassword(confirmPassword);
                            setMessageError('');
                        }}
                        errorMessage={messageError}
                    />

                </View>
                <View style={{ width: '100%', paddingHorizontal: sizeParse(100) }}>
                    {!buttonDisable ?
                        <ButtonLogarDesativado>
                            {loading ?
                                <TextLogin style={{ fontSize: 20 }}>
                                    <LoadingComponent size={20} />
                                </TextLogin>
                                :
                                <TextLogin style={{ fontSize: 20 }}>
                                    Cadastrar
                                </TextLogin>
                            }
                        </ButtonLogarDesativado>
                        :
                        <ButtonLogar onPress={_handleCadastro}>
                            {loading ?
                                <TextLogin style={{ fontSize: 20 }}>
                                    <LoadingComponent size={20} />
                                </TextLogin>
                                :
                                <TextLogin style={{ fontSize: 20 }}>
                                    Cadastrar
                                </TextLogin>
                            }
                        </ButtonLogar>
                    }

                </View>
                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'column', paddingBottom: sizeParse(30) }}>
                    <TextRegistrar1>
                        Já possui uma conta?
                    </TextRegistrar1>
                    <TouchableOpacity onPress={() => { navigate('Login') }}>
                        <TextRegistrar2> Faça Log In.</TextRegistrar2>
                    </TouchableOpacity>
                </View>
            </ContainerRegister>
        </ScrollView>

    )
}

export default Register;