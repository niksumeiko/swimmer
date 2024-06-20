import { StyleSheet } from 'react-native';

import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';
import { SwimmerLogo } from '../components/SwimmerLogo';

export default function AppScreen() {
    return (
        <ThemedView style={styles.container}>
            <SwimmerLogo />
            <ThemedText type="title">Swimmer app</ThemedText>
            <ThemedText>Interview exercise</ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
