import React, {FC, useRef, useState} from 'react';
import {
  View,
  Animated,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

type FullSizePhotoScreenProps = {
  photoUrl: string;
};

const FullSizePhotoScreen: FC<FullSizePhotoScreenProps> = ({photoUrl}) => {
  const windowHeight = Dimensions.get('window').width;
  const [isDark, setIsDark] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current;

  const toggleBackgroundColor = () => {
    if (isDark) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 450,
        useNativeDriver: true,
      }).start();
      setIsDark(!isDark);

      return;
    }
    Animated.timing(opacity, {
      toValue: 1,
      duration: 450,
      useNativeDriver: true,
    }).start();
    setIsDark(!isDark);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableHighlight style={{zIndex: 1}} onPress={toggleBackgroundColor}>
        <Image
          source={{uri: photoUrl}}
          style={{
            width: windowHeight,
            height: windowHeight,
          }}></Image>
      </TouchableHighlight>
      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
          opacity: opacity,
        }}
      />
    </View>
  );
};

export default FullSizePhotoScreen;
