import {Button, Modal, Pressable, Text, View} from "react-native";
import {X} from "lucide-react-native";
import {Checkbox} from "../components/Checkbox";

type Props = {
    isOpen: boolean,
    onClose: () => void,
}

export function ForgotPasswordModal({isOpen, onClose}: Props) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isOpen}
            onRequestClose={onClose}>
            <View className="flex-1 justify-center items-center">
                <View className="relative bg-white p-12 w-9/12 shadow-md rounded gap-4">
                    <Pressable className="absolute right-5 top-5" onPress={onClose}>
                        <X size={16} color="black"/>
                    </Pressable>
                    <Text>¿Cómo prefieres recuperar tu contraseña?</Text>

                    <View className="gap-1">
                        <Checkbox>
                            Código por SMS
                        </Checkbox>
                        <Checkbox>
                            Código por Whatsapp
                        </Checkbox>
                    </View>

                    <Button color="green" title="Ok"/>
                </View>
            </View>
        </Modal>
    )
}

