import {Text, View} from 'react-native';
import {Container} from "./Container";
import {TabNavigator} from "./TabNavigator";
import {Reminder} from "./Reminder";
import {ConfirmReminderModal} from "../modals/ConfirmReminderModal";
import {useState} from "react";

export const ScreenContent = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <Container>
            <View className="px-4">
                <Text className={styles.title}>Panel de Control</Text>
                <View className={styles.separator}/>

                <View className="gap-4">
                    <Reminder title="Salbutamol"/>
                    <Reminder title="Aspirina" withConfirm onPress={() => setShowModal(true)}/>
                    <Reminder title="Amoxil" withConfirm onPress={() => setShowModal(true)} disabled/>
                    <Reminder title="Xanax" withConfirm onPress={() => setShowModal(true)} disabled/>
                </View>
            </View>
            <TabNavigator/>

            <ConfirmReminderModal isOpen={showModal} onClose={() => setShowModal(false)}/>
        </Container>
    );
};

const styles = {
    separator: `h-[1px] my-7 w-4/5 bg-gray-200 mx-auto`,
    title: `text-2xl font-bold mt-8 text-center`,
};
