import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ScreenContent} from './components/ScreenContent';
import {Settings} from "./components/Settings";
import {Reports} from "./components/Reports";
import {History} from "./components/History";
import {SignIn} from "./components/SignIn";

import './global.css';

const RootStack = createNativeStackNavigator({
    initialRouteName: 'SignIn',
    screens: {
        SignIn: {
            screen: SignIn,
            options: {
                headerShown: false,
            },
        },
        Home: {
            screen: ScreenContent,
            options: {
                headerShown: false,
            },
        },
        Settings: {
            screen: Settings,
            options: {
                headerShown: false,
            },
        },
        Reports: {
            screen: Reports,
            options: {
                headerShown: false,
            },
        },
        History: {
            screen: History,
            options: {
                headerShown: false,
            },
        }
    },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
    return (
        <SafeAreaProvider>
            <Navigation/>
            <StatusBar style="auto"/>
        </SafeAreaProvider>
    );
}
