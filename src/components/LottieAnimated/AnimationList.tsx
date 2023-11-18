import React from 'react';
import LottieView from 'lottie-react-native';

export default function AnimationList() {
  return (
    <LottieView
      source={require('./list.json')}
      autoPlay={true}
      loop={true}
      style={{
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
}
