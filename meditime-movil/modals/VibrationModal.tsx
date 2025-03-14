import {Button, Modal, Pressable, Text, View} from "react-native";
import {X} from "lucide-react-native";
import {Checkbox} from "../components/Checkbox";
import Slider from "@react-native-community/slider";

type Props = {
    isOpen: boolean,
    onClose: () => void,
}

export function VibrationModel({isOpen, onClose}: Props) {
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
                    <Text>Vibraciones</Text>

                    <Slider value={0.5}/>

                    <View className="gap-1">
                        <Checkbox>
                            Corto
                        </Checkbox>
                        <Checkbox>
                            Medio
                        </Checkbox>
                        <Checkbox>
                            Básico
                        </Checkbox>
                        <Checkbox>
                            Latido
                        </Checkbox>
                        <Checkbox>
                            Tik Tok
                        </Checkbox>
                        <Checkbox>
                            Zig Zig Zig
                        </Checkbox>
                    </View>

                    <Button onPress={onClose} color="green" title="Ok"/>
                </View>
            </View>
        </Modal>
    )
}

