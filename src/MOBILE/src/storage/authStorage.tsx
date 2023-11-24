import { AUTHORIZATION_ID, AUTHORIZATION_KEY } from "../constants/authorizationConstants";
import { setModalAction } from "../store/reducers/globalReducer";
import { setUserAction } from "../store/reducers/userReducer";
import { getItemStorage, removeItemStorage, setItemStorage } from "./asyncStorage";


//=====================================================================================================================================//
export const deleteAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = async (token?: string) => setItemStorage(AUTHORIZATION_KEY, token);

export const getAuthorizationToken = async () => getItemStorage(AUTHORIZATION_KEY);
//=====================================================================================================================================//


//=====================================================================================================================================//
export const deleteAuthorizatioId = () => removeItemStorage(AUTHORIZATION_ID);

export const setAuthorizationId = async (token?: string) => setItemStorage(AUTHORIZATION_ID, token);

export const getAuthorizationId = async () => getItemStorage(AUTHORIZATION_ID);
//=====================================================================================================================================//

//functions para redirects do async storage
// Assumindo que os imports necessários já foram incluídos

export const Login_Redirect = async (reset, dispatch) => {
    const jwt_token = await getAuthorizationToken();
    const id_username = await getAuthorizationId();

    if (!!id_username) {
        try {
            const response = await fetch(`https://3f80-2804-d45-9911-9b00-398f-75dc-95fc-dd83.ngrok-free.app/api/Usuarios/${id_username}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${jwt_token}`,
                },
            });

            console.log('==================');
            console.log(jwt_token);

            if (response.ok) {
                const data = await response.json();
                dispatch(setUserAction(data.mensagem));

                reset({
                    index: 0,
                    routes: [{ name: 'Home' }]
                });
            } else {
                dispatch(setModalAction({ visible: true, title: 'ERROR:', text: 'Usuário não encontrado, faça o login!' }));
            }
        } catch (error) {
            dispatch(setModalAction({ visible: true, title: 'ERROR:', text: 'Erro ao consultar usuário!' }));
        }
    }
};


export const Logout_Redirect = async (navigate) => {
    const id_storage = await getAuthorizationToken();

    if (!!id_storage) {
        await deleteAuthorizationToken();
        await deleteAuthorizatioId();
        navigate('Login');


    }
};
