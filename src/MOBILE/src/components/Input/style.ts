import styled from 'styled-components/native';
import { COLORS } from "../../themes/colors";
import { FONTS } from '../../themes/fonts';
import { sizeParse } from '../../assets/functions/functions';


export const ContainerInput = styled.TextInput `
    width: 75%;
    border-radius: 10px;
    padding: 15px;
    background-color: rgba(0,0,0,0);
    color: #B0B0B0;
    align-items: flex-start;
    justify-content: flex-start;

`;

export const TextLogin = styled.Text `
    font-size: 16px;
    color: ${COLORS.white};
    font-family: ${FONTS.regular};
    text-align: center;
    
`;

export const TextLoginInput = styled.Text `
    font-size: 13px;
    color: #B0B0B0;
    font-family: ${FONTS.regular};
    width: 60px;
`;

export const TextRecoveryPassword = styled.Text `
    font-size: 13px;
    color: ${COLORS.white};
    font-family: ${FONTS.bold};

`;

export const TextRegistrar1 = styled.Text `
    font-size: 13px;
    color: ${COLORS.white};
    font-family: ${FONTS.regular};

`;

export const TextRegistrar2 = styled.Text `
    font-size: 16px;
    color: ${COLORS.white};
    font-family: ${FONTS.bold};
`;


export const TitleLogin = styled.Text `
    font-size: 40px;
    color: ${COLORS.white};
    font-family: ${FONTS.regular};
    text-align: center;
`;