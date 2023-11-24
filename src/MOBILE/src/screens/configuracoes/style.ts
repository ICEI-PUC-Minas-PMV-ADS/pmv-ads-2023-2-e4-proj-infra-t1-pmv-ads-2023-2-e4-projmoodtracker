import styled from 'styled-components/native';
import { COLORS } from '../../themes/colors';


export const TextArea = styled.TextInput`
    border-color: '#ccc';
    padding: 8;
    font-size: 16;
`;

export const ButtonSalvar = styled.TouchableOpacity`
    width: 100%;
    background-color: ${COLORS.secundary};
    justify-content: center;
    border-radius: 20px;
    align-items: center;
`;

export const ButtonSair = styled.TouchableOpacity`
    width: 100%;
    background-color: ${COLORS.red};
    justify-content: center;
    border-radius: 20px;
    align-items: center;
`;