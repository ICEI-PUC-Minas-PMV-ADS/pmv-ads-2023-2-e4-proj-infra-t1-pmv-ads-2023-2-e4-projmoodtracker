import Login from "./src/screens/login";
import { useFonts, Inter_100Thin, Inter_400Regular, Inter_700Bold, Inter_900Black, Inter_200ExtraLight, Inter_300Light } from "@expo-google-fonts/inter";
import { Provider } from 'react-redux';
import store from "./src/store";
import LoadingComponent from "./src/components/loading/Loading";
import GlobalModal from "./src/components/modalFutCards/GlobalModal";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PasswordRecovery from "./src/screens/passwordRecovery";
import Register from "./src/screens/register";
import Home from "./src/screens/home";
import SplashScreen from "./src/screens/splash";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from "./src/themes/colors";
import CreateNote from "./src/screens/createNote";
import Configuracoes from "./src/screens/configuracoes";
import EditNote from "./src/screens/editNote";

/* App.tsx também ficará responsável pelas routers */


const App = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [fontsLoaded] = useFonts({ Inter_100Thin, Inter_400Regular, Inter_700Bold, Inter_900Black, Inter_200ExtraLight, Inter_300Light });

    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    if (!fontsLoaded) {
        return <LoadingComponent size={20} />;
    }

    const TabMenuNavigation = () => {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        switch (route.name) {
                            case 'Home':
                                iconName = 'home';
                                break;
                            case 'CreateNote':
                                iconName = 'pencil-square-o';
                                break;
                            case 'Configuracoes':
                                iconName = 'cog';
                                break;
                            /*                             case 'Filtrar':
                                                            iconName = 'filter';
                                                            break; */
                            default:
                                iconName = 'home';
                        }
                        return <FontAwesome name={iconName} size={40} color={color} />;
                    },
                    tabBarActiveTintColor: COLORS.grayLight,
                    tabBarShowLabel: true,
                    tabBarInactiveTintColor: COLORS.primary,
                    tabBarStyle: {
                        height: 80,
                        padding: 10,
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        borderTopWidth: 0,
                        borderWidth: 0,
                        position: 'absolute',
                    },

                })}
            >
                <Tab.Screen name="Inicio" component={Home} options={{ title: 'Início', headerShown: false, tabBarLabel: 'Início' }} />
                <Tab.Screen name="CreateNote" component={CreateNote} options={{ title: 'Criar Nota', headerShown: false, tabBarLabel: 'Criar Nota' }} />
                <Tab.Screen name="Configuracoes" component={Configuracoes} options={{ title: 'Configurações', headerShown: false, tabBarLabel: 'Configurações/Sair' }} />
            </Tab.Navigator>
        )
    }

    return (
        <Provider store={store}>
            <GlobalModal />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="SplashScreen"
                        component={SplashScreen}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="Home"
                        component={TabMenuNavigation}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="EditarNote"
                        component={EditNote}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen
                        name="PasswordRecovery"
                        component={PasswordRecovery}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Configuracoes"
                        component={Configuracoes}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>


            </NavigationContainer>
        </Provider>
    )
}

export default App;