import {Text, View} from 'react-native';
import Container from "./Container";
import TabNavigator from "./TabNavigator";
import Reminder from "./Reminder";
import React, {useState} from "react";

const ScreenContent = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Container>
            <View className="px-4">
                <Text className={styles.title}>Panel de Control</Text>
                <View className={styles.separator}/>

                <View className="gap-4">
                    <Reminder
                        title="Salbutamol"
                        reminder="6:00am"
                    />
                    <Reminder
                        title="Aspirina"
                        reminder="Ahora 10:00am"
                        withConfirm
                        onPress={() => setShowModal(true)}/>
                    <Reminder
                        title="Metronidazol"
                        reminder="Próxima 2:00pm"
                        withConfirm
                        onPress={() => setShowModal(true)}
                        disabled
                    />
                    <Reminder
                        title="Amoxil"
                        reminder="Próxima 8:00pm"
                        withConfirm
                        onPress={() => setShowModal(true)}
                        disabled
                    />
                </View>
            </View>
            <TabNavigator/>


        </Container>
    );
};

const styles = {
    separator: `h-[1px] my-7 w-4/5 bg-gray-200 mx-auto`,
    title: `text-2xl font-bold mt-8 text-center`,
};

export default React.memo(ScreenContent);
