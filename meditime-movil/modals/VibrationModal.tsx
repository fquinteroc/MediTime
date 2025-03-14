import { Button, Modal, Pressable, Text, View } from "react-native";
import { X } from "lucide-react-native";
import Checkbox from "../components/Checkbox";
import Slider from "@react-native-community/slider";
import React from "react";

type Props = {
    isOpen: boolean,
    onClose: () => void,
}

function VibrationModel({ isOpen, onClose }: Props) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isOpen}
            onRequestClose={onClose}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View
                    style={{
                        position: 'relative',
                        backgroundColor: 'white',
                        padding: 24,
                        width: '75%',
                        borderRadius: 8,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        gap: 16,
                    }}
                >
                    <Pressable
                        onPress={onClose}
                        style={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                        }}
                    >
                        <X size={16} color="black" />
                    </Pressable>
                    <Text>Vibraciones</Text>

                    <Slider value={0.5} />

                    <View
                        style={{
                            gap: 4,
                        }}
                    >
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

                    <Button onPress={onClose} color="green" title="Ok" />
                </View>
            </View>
        </Modal>
    )
}

export default React.memo(VibrationModel);