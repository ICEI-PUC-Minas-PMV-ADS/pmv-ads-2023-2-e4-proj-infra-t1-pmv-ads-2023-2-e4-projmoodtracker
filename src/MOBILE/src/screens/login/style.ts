import styled from 'styled-components/native';
import { COLORS } from '../../themes/colors';


export const ContainerLogin = styled.View`
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 30px;
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