import { Button, Modal, Pressable, Text, View } from 'react-native';
import { X } from 'lucide-react-native';
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
};

function ConfirmReminderModal({ isOpen, onConfirm, onClose }: Props) {
  return (
      <Modal animationType="slide" transparent={true} visible={isOpen} onRequestClose={onClose}>
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
            <Text>Tomaste tu medicación de:</Text>
            <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                }}
            >
              Aspirina
            </Text>

            <View
                style={{
                  flexDirection: 'row',
                  gap: 16,
                }}
            >
              <View style={{ flex: 1 }}>
                <Button
                    onPress={() => {
                      onConfirm?.();
                      onClose();
                    }}
                    color="green"
                    title="Si"
                />
              </View>
              <View style={{ flex: 1 }}>
                <Button onPress={onClose} color="gray" title="No" />
              </View>
            </View>
          </View>
        </View>
      </Modal>
  );
}

export default React.memo(ConfirmReminderModal);