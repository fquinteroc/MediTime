import {Container} from "./Container";
import {ScrollView, Text, View} from "react-native";
import {TabNavigator} from "./TabNavigator";
import {LineHistory} from "./LineHistory";

export function History() {
    return (
        <Container>
            <View className="px-4">
                <Text className={styles.title}>Histórico</Text>
                <View className={styles.separator}/>

                <ScrollView contentContainerStyle={{flexGrow: 1, gap: 14}}>
                    <LineHistory
                        day="Lunes"
                        date="3 de febrero 2025"
                        isOpen
                    />
                    <LineHistory
                        day="Martes"
                        date="4 de febrero 2025"
                    />
                    <LineHistory
                        day="Miércoles"
                        date="5 de febrero 2025"
                    />
                    <LineHistory
                        day="Jueves"
                        date="6 de febrero 2025"
                    />
                    <LineHistory
                        day="Viernes"
                        date="7 de febrero 2025"
                    />
                    <LineHistory
                        day="Sábado"
                        date="8 de febrero 2025"
                    />
                    <LineHistory
                        day="Domingo"
                        date="9 de febrero 2025"
                    />
                </ScrollView>
            </View>
            <TabNavigator/>
        </Container>
    );
}

const styles = {
    separator: `h-[1px] my-7 w-4/5 bg-gray-200 mx-auto`,
    title: `text-2xl font-bold mt-8 text-center`,
};
