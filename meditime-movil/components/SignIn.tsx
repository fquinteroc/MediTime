import Container from "./Container";
import {Button, Text, TextInput, View} from "react-native";
import React, {useState} from "react";
import {useNavigation} from "@react-navigation/native";
import ForgotPasswordModal from "../modals/ForgotPasswordModal";

function SignIn() {
    const navigator = useNavigation();
    const [showInput, setShowInput] = useState<boolean>(false);
    const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);

    return (
        <Container>
            <View className="flex-1 flex-col px-4">
                <View className="flex-1 justify-end items-center">
                    <Text className="text-6xl text-center font-bold">MEDITIME</Text>
                </View>
                {showInput ? (
                    <View className="flex-1 justify-center gap-4">
                        <View className="gap-2">
                            <TextInput className="bg-zinc-100 border border-zinc-500 rounded" placeholder="Usuario"/>
                            <TextInput className="bg-zinc-100 border border-zinc-500 rounded" placeholder="Contraseña"/>
                        </View>

                        <Button title="Ingresar" onPress={() => navigator.navigate("Home")}/>
                    </View>
                ) : (
                    <View className="flex-1 justify-center">
                        <Button title="Iniciar Sesión" onPress={() => setShowInput(true)}/>

                        <View className="flex-row justify-between items-center mt-3">
                            <Text>Crear cuenta</Text>
                            <Text onPress={() => setShowForgotPassword(true)}>Olvide mi contraseña</Text>
                        </View>
                    </View>
                )}
            </View>

            <ForgotPasswordModal isOpen={showForgotPassword} onClose={() => setShowForgotPassword(false)}/>
        </Container>
    );
}

export default React.memo(SignIn);

