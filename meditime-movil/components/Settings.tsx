import {Container} from "./Container";
import {Text, View} from "react-native";
import {TabNavigator} from "./TabNavigator";
import {Options} from "./Options";
import {RingtoneModal} from "../modals/RingtoneModal";
import {useEffect, useState} from "react";
import {VibrationModel} from "../modals/VibrationModal";

export function Settings() {
    const [checkRingtone, setCheckRingtone] = useState(false);
    const [checkVibration, setCheckVibration] = useState(false);
    const [checkNotification, setCheckNotification] = useState(false);

    const [showRingtoneModal, setShowRingtoneModal] = useState(false);
    const [showVibrationModal, setShowVibrationModal] = useState(false);

    useEffect(() => {
        setShowRingtoneModal(checkRingtone);
    }, [checkRingtone]);

    useEffect(() => {
        setShowVibrationModal(checkVibration);
    }, [checkVibration]);

    return (
        <Container>
            <View className="px-4">
                <Text className={styles.title}>Configuración</Text>
                <View className={styles.separator}/>

                <View className="gap-2">
                    <Options
                        title="Tonos"
                        checked={checkRingtone}
                        onValueChange={() => setCheckRingtone(!checkRingtone)}
                    />
                    <Options
                        title="Vibraciones"
                        checked={checkVibration}
                        onValueChange={() => setCheckVibration(!checkVibration)}
                    />
                    <Options
                        title="Notificaciones"
                        checked={checkNotification}
                        onValueChange={() => setCheckNotification(!checkNotification)}
                    />
                </View>
            </View>
            <TabNavigator/>

            <RingtoneModal isOpen={showRingtoneModal} onClose={() => setShowRingtoneModal(false)}/>
            <VibrationModel isOpen={showVibrationModal} onClose={() => setShowVibrationModal(false)}/>
        </Container>
    );
}

const styles = {
    separator: `h-[1px] my-7 w-4/5 bg-gray-200 mx-auto`,
    title: `text-2xl font-bold mt-8 text-center`,
};
