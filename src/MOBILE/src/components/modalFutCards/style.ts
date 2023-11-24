import styled from 'styled-components/native';
import { COLORS } from '../../themes/colors';
import { sizeParse } from '../../assets/functions/functions';
import { StyleSheet } from 'react-native';


export const ContainerModal = styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50%;
    background-color: ${COLORS.white};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`;


export const STYLES = StyleSheet.create({
    titleModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: sizeParse(20),
        paddingTop: sizeParse(15),
        alignItems: 'center',

    },
    textModal: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingHorizontal: sizeParse(15),
        paddingTop: sizeParse(20)
    }
});


