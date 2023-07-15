import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import jwt_decode from "jwt-decode";
import { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';

import IconButton from '../../components/ui/IconButton';
import { Colors } from '../../constants/styles';
import AuthContextProvider, { AuthContext } from '../../store/auth-contenxt';
import LoginScreen from '../AuthenticationScreens/LoginScreen';
import SignupScreen from '../AuthenticationScreens/SignupScreen';
import CartScreen from '../AuthenticationScreens/CartScreen';
import WelcomeAdminScreen from '../AuthenticationScreens/WelcomeAdminScreen';
import WelcomeScreen from '../AuthenticationScreens/WelcomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClientProfileScreen from '../AuthenticationScreens/ClientProfileScreen';
import RestaurantsHomeScreen from '../AuthenticationScreens/RestaurantsHomeScreen';
import PiattoCustomScreen from '../AuthenticationScreens/PiattoCustomScreen';
import ReduxProvider from '../../redux/store';
import { Provider } from 'react-redux';
import store from '../../redux/store';

const Stack = createNativeStackNavigator();
const StackClient = createNativeStackNavigator();
const OrderClientStack = createNativeStackNavigator();
const BottonTabs = createBottomTabNavigator();

const OrderClientRoot = () => {
    return (
      <OrderClientStack.Navigator initialRouteName="RestaurantsHome" screenOptions={{headerShown: true}}>
        <OrderClientStack.Screen name="RestaurantsHome" component={RestaurantsHomeScreen} options={{headerShown: false}}/>
        {/* PiattoCustomScreen CUSTOM VA MESSO DENTRO UNA FUNZIONE INSIEME A RestaurantsHomeScreen (PRIMO DI DEFAULT) */}
        <OrderClientStack.Screen name="PiattoCustom" component={PiattoCustomScreen} options={{headerShown: false}} />
      </OrderClientStack.Navigator>
    );
  };

const ClientRoot = () => {
    return (
      <StackClient.Navigator initialRouteName="Welcome" screenOptions={{headerShown: true}}>
        <StackClient.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
        <StackClient.Screen name="OrderClientRoot" component={OrderClientRoot} options={{title : 'Ristorante'}}/>
        {/* PiattoCustomScreen CUSTOM VA MESSO DENTRO UNA FUNZIONE INSIEME A RestaurantsHomeScreen (PRIMO DI DEFAULT) */}
        {/* <StackClient.Screen name="PiattoCustom" component={PiattoCustomScreen} screenOptions={{headerShown: true}} /> */}
      </StackClient.Navigator>
    );
  };

function AuthStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary500 },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: Colors.primary100 },
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    );
}

function AuthenticatedStack() {
    const authCtx = useContext(AuthContext);
    return (
        // <Provider store={store}>
        <BottonTabs.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary500 },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: Colors.primary100 },
                headerRight: ({ tintColor }) => {
                    return (
                        <IconButton
                            icon={'exit'}
                            size={24}
                            color={tintColor}
                            onPress={authCtx.logout}></IconButton>)
                }
            }}
        >           
        <BottonTabs.Screen name="Ordini" component={CartScreen}
            options={{
                title: 'Ordini',
                tabBarLabel: 'Ordini',
                tabBarIcon: ({ color, size }) => <IconButton
                    icon={'cart'}
                    size={size}
                    color={color}></IconButton>
            }}
        />   
            <BottonTabs.Screen name="ClientRoot" component={ClientRoot}
                options={{
                    title: 'Home',
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => <IconButton
                        icon={'home'}
                        size={size}
                        color={color}></IconButton>
                }}
            />          
            <BottonTabs.Screen name="Profilo" component={ClientProfileScreen}
                options={{
                    title: 'Profilo',
                    tabBarLabel: 'Profilo',
                    tabBarIcon: ({ color, size }) => <IconButton
                        icon={'person'}
                        size={size}
                        color={color}></IconButton>
                }}
            />
        </BottonTabs.Navigator>
        // </Provider>
    );
}
function AuthenticatedAdminStack() {
    const authCtx = useContext(AuthContext);
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary500 },
                headerTintColor: 'white',
                contentStyle: { backgroundColor: Colors.primary100 },
            }}
        >
            <Stack.Screen name="Welcome" component={WelcomeAdminScreen} options={{
                headerRight: ({ tintColor }) => (<IconButton
                    icon="exit"
                    color={tintColor}
                    size={24}
                    onPress={authCtx.logout}
                />),
            }} />
        </Stack.Navigator>
    );
}
function RBAC_system() {
    const authCtx = useContext(AuthContext);
    if (!authCtx.isAuthenticated)
        return <AuthStack></AuthStack>
    else if (authCtx.isAuthenticated && authCtx.isAdmin)
        return <AuthenticatedAdminStack />
    else
        return <AuthenticatedStack />
}
function Navigation() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                {RBAC_system()}
            </NavigationContainer>
        </Provider>
    );
}

function Root() {
    const authCtx = useContext(AuthContext);


    const [isTryingLogin, setIsTryingLogin] = useState(true);
    useEffect(() => {
        async function fetchToken() {
            const storedToken = await AsyncStorage.getItem('token'); //utilizzato per memorizzare info sul dispositivo
            if (storedToken) {
                var decoded = jwt_decode(storedToken);
                var isAdmin = decoded["admin"]
                if (isAdmin != undefined)
                    authCtx.setAdmin();
                authCtx.authenticate(storedToken);
            }
            setIsTryingLogin(false);
        }

        fetchToken();
    }, []);

    if (isTryingLogin) {
        // console.log(firebase)

        // console.log(users);
        return (<Text>Attendi</Text>);
        // serve uno splashscreen: libreria già installata. lezione store authtoken, quello non va, deprecato 
    }
    return <Navigation />
}

export default function App() {
    return (
        <>
            <Root />
        </>
    );
}