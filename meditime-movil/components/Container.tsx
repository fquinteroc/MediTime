import {ImageBackground, SafeAreaView} from 'react-native';

export const Container = ({children}: { children: React.ReactNode }) => {
    return (
        <SafeAreaView className={styles.container}>
            <ImageBackground
                className="absolute top-0 right-0 left-0 bottom-0 flex-1 opacity-50"
                resizeMethod="auto"
                source={require('../assets/image-5.png')}
            />
            {children}
        </SafeAreaView>
    )
};

const styles = {
    container: 'relative flex flex-1 p-safe',
};
