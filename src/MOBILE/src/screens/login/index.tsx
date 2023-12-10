
import { ButtonLogar, ContainerLogin } from "./style";
import Input from "../../components/Input/Input";
import { TouchableOpacity, ImageBackground, View, Image, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { FUNDO_LOGIN, MOODTRACKER_LOGO, MOODTRACKER_LOGO_LOGIN } from "../../themes/images";
import { TextLogin, TextRecoveryPassword, TextRegistrar1, TextRegistrar2, TitleLogin } from "../../components/Input/style";
import { ViewColumn } from "../../components/FormatViews/StyleView.style";
import { useEffect, useState } from "react";
import LoadingComponent from "../../components/loading/Loading";
import { LoginReturnTypes } from "../../types/loginTypes";
import { useDispatch, useSelector } from "react-redux";
import { setUserAction } from "../../store/reducers/userReducer";
import { setModalAction } from "../../store/reducers/globalReducer";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { Login_Redirect, getAuthorizationToken, setAuthorizationId, setAuthorizationToken } from "../../storage/authStorage";
import { COLORS } from "../../themes/colors";
import axios from "axios";



const Login = () => {
    /*     const user = useSelector((state: RootState) => state.userReducer.user);
        const modal = useSelector((state: RootState) => state.globalReducer.modal); */
    const dispatch = useDispatch();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>('');


    // o reset serve para ir para uma pagina sem opção de voltar
    const { reset, navigate } = useNavigation<NavigationProp<ParamListBase>>();

    const _handleRecovery = () => {
        navigate('PasswordRecovery');
    }

    const EfetuarLogin = () => {
        reset({
            index: 0,
            routes: [{ name: 'Home' }] //usado para nao voltar para o login e sem fechar o app.
        });
    }

    useEffect(() => {
        Login_Redirect(reset, dispatch); //chama a função que coloquei em authStorage para redirecionar se ja tiver feito login
    }, [])

    const user = {
        Usuario: username,
        senha: password
    }

    async function authLogin() {
        setLoading(true);

        if (username === '' || password === '') {
            setMessageError('Os campos não podem estar vazios!');
            setLoading(false);
            return;
        }


        try {
            const requestData = {
                Usuario: username,
                senha: password
            };

            const response = await axios.post('https://1aba-2804-b54-2300-5845-a0c7-6229-e3aa-2bf8.ngrok.io/api/Usuarios/authenticate', requestData);
            

            if (!!response.data && response.data !== "") {
                setAuthorizationToken(response.data.jtwToken);
                setAuthorizationId(username);

                dispatch(setModalAction({ visible: true, title: 'BEM-VINDO(A)!', text: 'Login efetuado com sucesso!' }));

                dispatch(setUserAction(username));

                EfetuarLogin();
            } else {
                dispatch(setModalAction({ visible: true, title: 'CONTA INVÁLIDA', text: 'Usuário ou senha inválidos, tente novamente ou crie uma conta!' }));
            }
        } catch (error) {
            setLoading(false);
            if (error.response && error.response.status === 401) {
                dispatch(setModalAction({ visible: true, title: 'CONTA INVÁLIDA', text: 'Usuário ou senha inválidos, tente novamente ou crie uma conta!' }));
            } else {
                dispatch(setModalAction({ visible: true, title: 'CONTA INVÁLIDA', text: `Ocorreu algum erro: ${error}` }));
            }
        } finally {
            setLoading(false); //parar o loading
        }

    }


    return (
        <View style={{ backgroundColor: COLORS.primary }}>
            <ContainerLogin>
                <Image source={MOODTRACKER_LOGO} style={{ width: 300, height: 300, resizeMode: 'contain' }} />
                <ViewColumn style={{ alignItems: 'center' }}>
                    <TextLogin>
                        Insira suas credencias de acesso
                    </TextLogin>
                </ViewColumn>
                <ViewColumn style={{ gap: 15, alignItems: 'center' }}>

                    <Input
                        value={username}
                        title='Usuário'
                        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                            const user = event.nativeEvent.text;
                            setUsername(user);
                            setMessageError('');
                        }}
                        errorMessage={messageError}
                    />


                    <Input
                        value={password}
                        title="Senha"
                        isPassword
                        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                            const password = event.nativeEvent.text;
                            setPassword(password);
                            setMessageError('');
                        }}
                        errorMessage={messageError}
                    />
                </ViewColumn>
                <View style={{ width: 343 }}>
                    <ButtonLogar onPress={authLogin}>
                        {loading ?
                            <TextLogin style={{ fontSize: 20 }}>
                                <LoadingComponent size={20} />
                            </TextLogin>
                            :
                            <TextLogin style={{ fontSize: 20 }}>
                                Log In
                            </TextLogin>
                        }
                    </ButtonLogar>
                </View>
                <TouchableOpacity style={{ width: 343, alignItems: 'center' }} onPress={_handleRecovery}>
                    <TextRecoveryPassword>
                        Esqueceu sua senha?
                    </TextRecoveryPassword>
                </TouchableOpacity>
                <View style={{ width: 343, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <TextRegistrar1>
                        Não tem uma conta?
                    </TextRegistrar1>
                    <TouchableOpacity onPress={() => { navigate('Register') }}>
                        <TextRegistrar2> Cadastre-se.</TextRegistrar2>
                    </TouchableOpacity>
                </View>

            </ContainerLogin>
        </View>

    )
}

export default Login;