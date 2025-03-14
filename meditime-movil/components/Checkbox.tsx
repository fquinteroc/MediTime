import React, {useState} from "react";
import {Pressable, Text, View} from "react-native";
import {CheckIcon} from "lucide-react-native";

type Props = {
    children: React.ReactNode
}

function Checkbox({children}: Props) {
    const [checked, setChecked] = useState(false);

    return (
        <Pressable
            onPress={() => setChecked(!checked)}
            className="flex-row items-center gap-2"
        >
            {checked ? (
                <View className={`w-6 h-6 rounded border bg-blue-500 border-blue-500 justify-center items-center`}>
                    <CheckIcon size={16} color="blue"/>
                </View>
            ) : (
                <View className={`w-6 h-6 rounded border bg-white border-gray-300 justify-center items-center`}>
                    <CheckIcon size={16} color="white"/>
                </View>
            )}
            <Text className="text-gray-700">
                {children}
            </Text>
        </Pressable>
    );
}

export default React.memo(Checkbox);