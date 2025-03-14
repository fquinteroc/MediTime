import {Button, Modal, Pressable, Text, View} from "react-native";
import {X} from "lucide-react-native";

type Props = {
    isOpen: boolean,
    onClose: () => void,
}

export function ConfirmReminderModal({isOpen, onClose}: Props) {
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
                    <Text>Tomaste tu medicación de:</Text>
                    <Text className="text-center font-bold text-lg">Aspirina</Text>

                    <View className="flex-row gap-4">
                        <View className="flex-1">
                            <Button onPress={onClose} color="green" title="Si"/>
                        </View>
                        <View className="flex-1">
                            <Button onPress={onClose} color="gray" title="No"/>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

