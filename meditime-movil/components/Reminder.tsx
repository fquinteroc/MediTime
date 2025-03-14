import { Button, Text, View } from 'react-native';
import { useState } from 'react';

type Props = {
  title: string;
  reminder: string;
  withConfirm?: boolean;
  onPress?: VoidFunction;
  disabled?: boolean;
};

export function Reminder({ title, reminder, withConfirm, onPress, disabled }: Props) {
  const [isConfirm, setIsConfirm] = useState<boolean>(false);

  return (
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
              onPress();
              setIsConfirm(true);
            }}
          />
        ) : (
          <Text className="text-center text-lg">{isConfirm ? 'Confirmado' : 'Sin confirmar'}</Text>
        )}
      </View>
    </View>
  );
}
