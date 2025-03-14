import {Pressable, Text, View} from "react-native";
import {CalendarClock, ChartArea, NotebookText, Settings} from "lucide-react-native";
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from "react-native-safe-area-context";

export function TabNavigator() {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    return (
        <View style={{paddingBottom: insets.bottom}} className="absolute bottom-0 left-0 right-0 flex flex-row bg-zinc-100 border-zinc-200 border-t pb-1 pt-2">
            <Pressable
                className="items-center justify-center flex-1 gap-1"
                onPress={() => navigation.navigate('Home')}
            >
                <NotebookText color="black" strokeWidth={1.5}/>
                <Text className="text-center text-xs">Panel Control</Text>
            </Pressable>
            <Pressable
                className="items-center justify-center flex-1 gap-1"
                onPress={() => navigation.navigate('Settings')}
            >
                <Settings color="black" strokeWidth={1.5}/>
                <Text className="text-center text-xs">Configuración</Text>
            </Pressable>
            <Pressable
                className="items-center justify-center flex-1 gap-1"
                onPress={() => navigation.navigate('Reports')}
            >
                <ChartArea color="black" strokeWidth={1.5}/>
                <Text className="text-center text-xs">Reportes</Text>
            </Pressable>
            <Pressable
                className="items-center justify-center flex-1 gap-1"
                onPress={() => navigation.navigate('History')}
            >
                <CalendarClock color="black" strokeWidth={1.5}/>
                <Text className="text-center text-xs">Histórico</Text>
            </Pressable>
        </View>
    )
}
