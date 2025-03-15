import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import History from './components/History';
import Reports from './components/Reports';
import ScreenContent from './components/ScreenContent';
import Settings from './components/Settings';
import SignIn from './components/SignIn';

import './global.css';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SignIn">
                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={ScreenContent}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Settings"
                        component={Settings}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Reports"
                        component={Reports}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="History"
                        component={History}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto" />
        </SafeAreaProvider>
    );
}

export default React.memo(App);