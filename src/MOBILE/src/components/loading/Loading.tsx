import React, { useRef, useEffect } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const LoadingComponent = ({size}) => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startRotation();
  }, []);

  const startRotation = () => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const rotateInterpolation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.loading, { transform: [{ rotate: rotateInterpolation }] }]}>
        <AntDesign name="loading1" size={size} color="white" />
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
    borderRadius: 15,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingComponent;
