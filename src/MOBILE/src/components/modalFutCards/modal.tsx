import React, { useState } from "react";
import { Alert, Modal, ModalProps as ModalPropsReact, StyleSheet, Text, Pressable, View } from 'react-native';
import { ContainerModal, STYLES } from "./style";
import { COLORS } from "../../themes/colors";
import Entypo from '@expo/vector-icons/Entypo';
import { sizeParse } from "../../assets/functions/functions";
import { FONTS } from "../../themes/fonts";


interface ModalProps extends ModalPropsReact {
    title: string;
    text: string;
    _handleCloseModal: () => void;
}

const ModalMoodTracker = ({ title, text, _handleCloseModal, ...props }: ModalProps) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            onRequestClose={_handleCloseModal}
            style={{ justifyContent: 'flex-end', alignItems: 'center' }}
            {...props}>
            <ContainerModal>
                <View style={STYLES.titleModal}>
                    <Text style={{ fontFamily: FONTS.bold, fontSize: sizeParse(25), color: COLORS.primary, textAlign: 'center', alignItems: 'center' }}>{title}</Text>
                    <Pressable
                        onPress={_handleCloseModal}>
                        <Entypo name={'cross'} color={COLORS.primary} size={40} />
                    </Pressable>
                </View>
                <View style={STYLES.textModal}>
                    <Text style={{ fontFamily: FONTS.regular, fontSize: sizeParse(20), color: COLORS.gray_semi_dark, textAlign: 'center'}}>
                        {text}
                    </Text>
                </View>
            </ContainerModal>
        </Modal >
    )
}

export default ModalMoodTracker;