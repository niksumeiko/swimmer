import {
  StyleSheet, TouchableOpacity,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence, SharedValue,
} from 'react-native-reanimated';

import { ThemedText } from './ThemedText';

function startAnimation(rotationAnimation: SharedValue<number>) {
  rotationAnimation.value = withRepeat(
    withSequence(
      withTiming(5, { duration: 150 }),
      withTiming(0, { duration: 150 })
    ),
    2 // Run the animation 4 times
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
