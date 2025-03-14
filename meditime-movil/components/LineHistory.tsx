import {Pressable, Text, View} from "react-native";
import {ChevronDown} from "lucide-react-native";
import React, {useState} from "react";

type Props = {
    day: string,
    date: string,
    isOpen?: boolean,
}

function LineHistory({day, date, isOpen = false}: Props) {
    const [open, setOpen] = useState<boolean>(isOpen);

    return (
        <Pressable onPress={() => setOpen(!open)}>
            <View className="flex flex-row gap-3 bg-yellow-400 px-8 py-4 justify-between items-center rounded-md">
                <View className="flex-1">
                    <Text className="text-2xl font-bold">
                        {day}
                    </Text>
                </View>
                <View className="flex flex-1 justify-center items-center ">
                    <Text className="text-center text-lg">{date}</Text>
                </View>
                <View>
                    <ChevronDown color="black"/>
                </View>
            </View>

            {open && (
                <View className="bg-yellow-200 py-2 gap-1">
                    <Header/>
                    <Line medicare="Salbutamol" time="6:00am" state="Confirmado"/>
                    <Line medicare="Salbutamol" time="6:00am" state="Confirmado"/>
                    <Line medicare="Salbutamol" time="6:00am" state="Confirmado"/>
                    <Line medicare="Salbutamol" time="6:00am" state="Confirmado"/>
                </View>
            )}
        </Pressable>
    )
}

export function Header() {
    return (
        <View className="flex flex-row justify-between px-4 pt-1">
            <View className="flex-1">
                <Text>Medicamento</Text>
            </View>
            <View className="flex-1">
                <Text>Hora</Text>
            </View>
            <View className="flex-1">
                <Text>Estado</Text>
            </View>
        </View>
    )
}

type LineProps = {
    medicare: string,
    time: string,
    state: string,
}

export function Line({medicare, time, state}: LineProps) {
    return (
        <View className="flex flex-row justify-between px-4">
            <View className="flex-1">
                <Text>{medicare}</Text>
            </View>
            <View className="flex-1">
                <Text>{time}</Text>
            </View>
            <View className="flex-1">
                <Text>{state}</Text>
            </View>
        </View>
    )
}

export default React.memo(LineHistory);