import { TouchableOpacityProps } from "react-native"
import { ContainerButton } from "./style";

import Text from "../Text/Text";
import { textTypes } from "../Text/textTypes";
import { COLORS } from "../../themes/colors";

//Pega as props do TouchgableOpacity e transforma elas no ButtonProps que criamos agora para serem utilizdas customizavelmente.
interface ButtonProps extends TouchableOpacityProps {
    title: string
}

const Button = ({title, ...props}: ButtonProps) => {
    return (
        <ContainerButton {...props}>
            <Text color={COLORS.white}>{title}</Text>
        </ContainerButton>
    )
}

export default Button;