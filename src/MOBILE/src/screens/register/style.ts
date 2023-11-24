import styled from 'styled-components/native';
import { COLORS } from '../../themes/colors';
import { sizeParse } from '../../assets/functions/functions';


export const ContainerRegister = styled.View`
    flex:1;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${COLORS.primary};
    gap: 30px;
    padding-top: 40px;
`;

export const ButtonLogar = styled.TouchableOpacity`
    width: 100%;
    background-color: ${COLORS.secundary};
    justify-content: center;
    border-radius: 20px;
    align-items: center;
    padding: 15px;
    margin-top: 15px;
`;

export const ButtonLogarDesativado = styled.View`
    width: 100%;
    background-color: ${COLORS.gray80};
    justify-content: center;
    border-radius: 20px;
    align-items: center;
    padding: 15px;
    margin-top: 15px;
`;

export const ButtonEnviarFoto = styled.TouchableOpacity`
    width: 345px;
    height: 50px;
    flex-direction: row;
    background-color: ${COLORS.orangeAlert};
    justify-content: center;
    border-radius: 20px;
    align-items: center;
    margin-top: 15px;
    gap: 15px;
`;
