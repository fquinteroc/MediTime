import {Button, Text, View} from "react-native";

type Props = {
    title: string,
    withConfirm?: boolean,
    onPress?: VoidFunction,
    disabled?: boolean,
}

export function Reminder({title, withConfirm, onPress, disabled}: Props) {
    return (
        <View
            className={`flex flex-row gap-8 bg-yellow-400 p-8 items-center rounded-md ${disabled ? "opacity-70 " : " "}`}>
            <View className="flex-[2]">
                <Text>
                    6:00am
                </Text>
                <Text className="text-2xl font-bold" numberOfLines={1}>
                    {title}
                </Text>
            </View>
            <View className="flex flex-[3] justify-center items-center ">
                {withConfirm ? (
                    <Button title="Confirmar toma" onPress={onPress}/>
                ) : (
                    <Text className="text-center text-lg">Sin confirmar</Text>
                )}
            </View>
        </View>
    )
}