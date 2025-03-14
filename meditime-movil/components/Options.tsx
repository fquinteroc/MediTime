import {Switch, Text, View} from "react-native";
import React from "react";

type Props = {
    title: string,
    checked?: boolean,
    onValueChange?: (checked: boolean) => void,
}

function Options({title, checked, onValueChange}: Props) {
    return (
        <View className="flex flex-row items-center gap-8 bg-zinc-50 rounded-md border border-zinc-200 px-4">
            <View className="flex-1">
                <Text className="text-lg font-bold">{title}</Text>
            </View>
            <View className="flex-1">
                <Switch value={checked} onValueChange={onValueChange}/>
            </View>
        </View>
    )
}

export default React.memo(Options);