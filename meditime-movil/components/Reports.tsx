import {Container} from "./Container";
import {Image, Text, View} from "react-native";
import {TabNavigator} from "./TabNavigator";

export function Reports() {
    return (
        <Container>
            <View className="px-4">
                <Text className={styles.title}>Reportes</Text>
                <View className={styles.separator}/>

                <View className="items-center justify-center gap-6">
                    <Text className="font-bold text-center text-2xl mx-12">
                        Estadísticas de adherencia al tratamiento
                    </Text>
                    <Image source={require('../assets/image-20.png')}/>

                    <Text className="font-bold text-center text-2xl mx-12">
                        Gráficos de medicación Tomados vs. Omitidos
                    </Text>
                    <Image source={require('../assets/image-19.png')}/>
                </View>
            </View>
            <TabNavigator/>
        </Container>
    );
}

const styles = {
    separator: `h-[1px] my-7 w-4/5 bg-gray-200 mx-auto`,
    title: `text-2xl font-bold mt-8 text-center`,
};
