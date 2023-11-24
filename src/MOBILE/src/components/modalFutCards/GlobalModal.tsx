import { useState } from "react";
import ModalFutcards from "./modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {  setModalAction } from "../../store/reducers/globalReducer";
import ModalMoodTracker from "./modal";

export interface GlobalModalTypes {
    visible: boolean,
    text: string,
    title: string,
}

const GlobalModal = () => {
    const modal = useSelector((state: RootState) => state.globalReducer.modal);
    const dispatch = useDispatch();


    const closeModal = () => {
        dispatch(setModalAction({
            ...modal,
            visible: false,
        }))
    }

    const abrirModal = (title: string, text: string) => {
        dispatch(setModalAction({
            visible: true,
            title,
            text
        }));
    }

    const [visible, setVisible] = useState(true);
    return(
        <ModalMoodTracker title={modal.title} text={modal.text} visible={modal.visible} _handleCloseModal={closeModal}/>
    )
}

export default GlobalModal;