import { Button, Modal, Pressable, Text, View } from 'react-native';
import { X } from 'lucide-react-native';
import { Checkbox } from '../components/Checkbox';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function ForgotPasswordModal({ isOpen, onClose }: Props) {
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
            <Text>¿Cómo prefieres recuperar tu contraseña?</Text>

            <View
                style={{
                  gap: 4,
                }}
            >
              <Checkbox>Código por SMS</Checkbox>
              <Checkbox>Código por Whatsapp</Checkbox>
            </View>

            <Button onPress={onClose} color="green" title="Ok" />
          </View>
        </View>
      </Modal>
  );
}