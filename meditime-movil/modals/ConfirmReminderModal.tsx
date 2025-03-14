import {Button, Modal, Pressable, Text, View} from "react-native";
import {X} from "lucide-react-native";

type Props = {
    isOpen: boolean,
    onClose: () => void,
    onConfirm?: () => void,
}

export function ConfirmReminderModal({isOpen, onConfirm, onClose}: Props) {
    return (
      <Modal animationType="slide" transparent={true} visible={isOpen} onRequestClose={onClose}>
        <View className="flex-1 items-center justify-center">
          <View className="relative w-9/12 gap-4 rounded bg-white p-12 shadow-md">
            <Pressable className="absolute right-5 top-5" onPress={onClose}>
              <X size={16} color="black" />
            </Pressable>
            <Text>Tomaste tu medicación de:</Text>
            <Text className="text-center text-lg font-bold">Aspirina</Text>

            <View className="flex-row gap-4">
              <View className="flex-1">
                <Button
                  onPress={() => {
                      onConfirm();
                    onClose();
                  }}
                  color="green"
                  title="Si"
                />
              </View>
              <View className="flex-1">
                <Button onPress={onClose} color="gray" title="No" />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
}

