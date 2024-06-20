import { StyleSheet, TouchableOpacity } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSequence,
    withTiming,
} from 'react-native-reanimated';

import { ThemedText } from './ThemedText';

const ANIMATION_REPEATS = 2;
const ROTATION_DEGREE = 5;

function startAnimation(rotationAnimation: SharedValue<number>) {
    rotationAnimation.value = withRepeat(
        withSequence(
            withTiming(ROTATION_DEGREE, { duration: 150 }),
            withTiming(0, { duration: 150 }),
        ),
        ANIMATION_REPEATS, // Run the animation 4 times
    );
}

export function SwimmerLogo() {
    const rotationAnimation = useSharedValue(0);

    startAnimation(rotationAnimation);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${rotationAnimation.value}deg` }],
    }));

    return (
        <TouchableOpacity onPress={() => startAnimation(rotationAnimation)}>
            <Animated.View style={animatedStyle}>
                <ThemedText style={styles.text}>🏊🏻</ThemedText>
            </Animated.View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 75,
        lineHeight: 100,
    },
});
