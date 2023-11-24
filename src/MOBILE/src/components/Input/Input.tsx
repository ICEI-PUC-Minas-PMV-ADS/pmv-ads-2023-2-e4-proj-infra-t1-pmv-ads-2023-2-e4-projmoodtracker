import { TextInput, TextInputProps, View } from "react-native";
import Text from "../../components/Text/Text";
import { ContainerInput, TextLogin, TextLoginInput } from "./style";
import { COLORS } from "../../themes/colors";
import { sizeParse } from "../../assets/functions/functions";
import { ViewColumn, ViewRow } from "../FormatViews/StyleView.style";
import React, { useState } from "react";
import Entypo from '@expo/vector-icons/Entypo';


// Abaixo o InputProps que é essa tela está pegando e permitindo todas as props de TextInputProps ao invés de passar manualmente.
interface InputProps extends TextInputProps {
  title?: string;
  isPassword?: boolean;
  placeholder?: string;
  errorMessage?: string;
}

//agora o componente Input que criamos está tipado e preparado para usar com as props passadas em outros lugares.
const Input = ({ title, placeholder, isPassword, errorMessage, ...props }: InputProps) => {
  const [visiblePass, setVisiblePass] = useState<boolean>(!!isPassword);

  function _handleVisiblePassword() {
    setVisiblePass(!visiblePass);
  }

  return (
    <View style={{ paddingHorizontal: sizeParse(30) }}>
      <ViewColumn style={{ backgroundColor: COLORS.white, alignItems: 'center', paddingHorizontal: 15, borderRadius: 20, width: '100%', borderWidth: sizeParse(1), borderColor: !errorMessage ? COLORS.gray80 : COLORS.orangeAlert, flexDirection: 'row' }}>
        <ViewRow style={{ alignItems: 'center', width: '100%' }}>
          <TextLoginInput>
            {title}
          </TextLoginInput>
          <ContainerInput
            placeholder={placeholder}
            placeholderTextColor={COLORS.gray80}
            secureTextEntry={visiblePass} // Configura secureTextEntry com base na propriedade isPassword
            {...props}
          />

        </ViewRow>
        {!!isPassword ?
          <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <Entypo name={!!visiblePass ? 'eye' : 'eye-with-line'} color={COLORS.primary} size={30} onPress={_handleVisiblePassword} />
          </View>
          :
          <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <Entypo name={!!visiblePass ? 'eye' : 'eye-with-line'} color={COLORS.white} size={30} />
          </View>
        }
        {errorMessage && (
          <Text color={COLORS.orangeAlert} style={{ fontSize: sizeParse(14) }}>{errorMessage}</Text>
        )}
      </ViewColumn>
    </View>
  );
};

export default Input;