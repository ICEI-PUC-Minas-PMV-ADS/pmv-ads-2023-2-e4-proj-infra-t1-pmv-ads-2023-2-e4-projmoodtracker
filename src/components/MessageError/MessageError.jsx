import { Div } from "./styles";
import { useState, useEffect } from 'react'

export function MessageError({ msg }) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
//Oculta e desculta o componente não a mensagem
        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 4000)

        //pra n ter b.o limpa
        return () => clearTimeout(timer)

    }, [msg])



    return (

        <>
            {visible && (
                <Div>
                    {msg}
                </Div>
            )}


        </>


    );
}