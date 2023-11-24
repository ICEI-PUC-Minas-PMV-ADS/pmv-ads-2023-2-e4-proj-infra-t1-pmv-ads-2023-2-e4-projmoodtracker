import React, { useRef, useEffect } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoadingSplash = ({ size }) => {
  const bounce = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startBounce();
  }, []);

  const startBounce = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounce, {
          toValue: -1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounce, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const bounceInterpolation = bounce.interpolate({
    inputRange: [-1, 0],
    outputRange: [20, 0],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.loading,
          { transform: [{ translateY: bounceInterpolation }] },
        ]}
      >
        <Ionicons name="md-book-outline" size={size} color="white" />

      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingSplash;
