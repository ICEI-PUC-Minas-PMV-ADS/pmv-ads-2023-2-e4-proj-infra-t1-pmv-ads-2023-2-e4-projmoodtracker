import styled from 'styled-components/native';
import { COLORS } from '../../themes/colors';
import { FONTS } from '../../themes/fonts';


export const ContainerLogin = styled.View`
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 40px;

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

export const TextoRecovery = styled.Text `
    font-size: 16px;
    color: ${COLORS.white};
    font-family: ${FONTS.regular};
`;

export const ContainerRecovery = styled.View`
    width: 343px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;