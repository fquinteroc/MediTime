import { Button, Text, View } from 'react-native';
import React, { useState } from 'react';
import ConfirmReminderModal from '../modals/ConfirmReminderModal';

type Props = {
  title: string;
  reminder: string;
  withConfirm?: boolean;
  onPress?: VoidFunction;
  disabled?: boolean;
};

function Reminder({ title, reminder, withConfirm, onPress, disabled }: Props) {
  const [showModal, setShowModal] = useState(false);
  const [isConfirm, setIsConfirm] = useState<boolean>(false);

  return (
    <>
      <View
        className={`flex flex-row items-center gap-8 rounded-md bg-yellow-400 p-8 ${disabled ? 'opacity-70 ' : ' '}`}>
        <View className="flex-[2]">
          <Text>{reminder}</Text>
          <Text className="text-2xl font-bold" numberOfLines={1}>
            {title}
          </Text>
        </View>
        <View className="flex flex-[3] items-center justify-center ">
          {withConfirm ? (
            <Button
              title={isConfirm ? 'Confirmado' : 'Confirmar toma'}
              onPress={() => {
                setShowModal(true);
              }}
            />
          ) : (
            <Text className="text-center text-lg">
              {isConfirm ? 'Confirmado' : 'Sin confirmar'}
            </Text>
          )}
        </View>
      </View>

      <ConfirmReminderModal
        isOpen={showModal}
        onConfirm={() => setIsConfirm(true)}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}

export default React.memo(Reminder);
