import { View, Text, ImageBackground, TouchableOpacity, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { ButtonLogar, ContainerLogin, ContainerRecovery, TextoRecovery } from "./style";
import { ViewColumn } from "../../components/FormatViews/StyleView.style";
import { TextLogin, TextRecoveryPassword, TextRegistrar1, TextRegistrar2, TitleLogin } from "../../components/Input/style";
import Input from "../../components/Input/Input";
import { FUNDO_LOGIN } from "../../themes/images";
import { useState } from "react";
import LoadingComponent from "../../components/loading/Loading";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import InputRegister from "../../components/InputRegister/Input";
import { COLORS } from "../../themes/colors";


const PasswordRecovery = () => {
    const [newPassword, setNewPassword] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [messageError, setMessageError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');

    const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

    return (
        <View style={{backgroundColor: COLORS.primary}}>
            <ContainerLogin>
                <ViewColumn style={{ width: 343, alignItems: 'center' }}>
                    <TitleLogin>
                        Recuperação de Senha
                    </TitleLogin>
                    <TextLogin>
                        Insira seu e-mail utilizado no cadastro para que possamos enviar sua senha.
                    </TextLogin>
                </ViewColumn>
                <ViewColumn style={{ gap: 15, alignItems: 'center' }}>

                    <InputRegister
                        value={email}
                        placeholder="Email..."
                        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
                            const user = event.nativeEvent.text;
                            setEmail(user);
                        }}
                    />
                </ViewColumn>
                <View style={{ width: 343 }}>
                    <ButtonLogar onPress={() => { }}>
                        {!!loading ?
                            <LoadingComponent size={20} />
                            :
                            <TextLogin style={{ fontSize: 20 }}>
                                Recuperar senha
                            </TextLogin>
                        }

                    </ButtonLogar>
                </View>
                <ContainerRecovery>
                    <TouchableOpacity onPress={() => { navigate('Login') }}>
                        <TextoRecovery> Voltar para o login.</TextoRecovery>
                    </TouchableOpacity>
                </ContainerRecovery>


            </ContainerLogin>
        </View>

    )
}

export default PasswordRecovery;