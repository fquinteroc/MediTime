import { Button, Modal, Pressable, Text, View } from "react-native";
import { X } from "lucide-react-native";
import Checkbox from "../components/Checkbox";
import React from "react";

type Props = {
    isOpen: boolean,
    onClose: () => void,
}

function RingtoneModal({ isOpen, onClose }: Props) {
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
                    <Text>Tonos</Text>

                    <View
                        style={{
                            gap: 4,
                        }}
                    >
                        <Checkbox>
                            Ningúno
                        </Checkbox>
                        <Checkbox>
                            Llamada
                        </Checkbox>
                        <Checkbox>
                            Atiende
                        </Checkbox>
                        <Checkbox>
                            Lluvia
                        </Checkbox>
                        <Checkbox>
                            Sirena
                        </Checkbox>
                        <Checkbox>
                            Trueno
                        </Checkbox>
                        <Checkbox>
                            Pajaros
                        </Checkbox>
                    </View>

                    <Button onPress={onClose} color="green" title="Ok" />
                </View>
            </View>
        </Modal>
    )
}

export default React.memo(RingtoneModal);