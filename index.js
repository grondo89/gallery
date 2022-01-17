// In index.js of a new project
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Navigation} from 'react-native-navigation';
import AllPhotosScreen from './screens/AllPhotos/AllPhotosScreen';
import FullSizePhotoScreen from './screens/FullSizePhoto/FullSizePhotoScreen';

AllPhotosScreen.options = {
  topBar: {
    title: {
      text: 'All Photos',
    },
  },
};

// Settings screen declaration - this is the screen we'll be pushing into the stack
const SettingsScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Settings Screen</Text>
    </View>
  );
};

Navigation.registerComponent('AllPhotos', () => AllPhotosScreen);
Navigation.registerComponent('FullSizePhoto', () => FullSizePhotoScreen);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
});
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'AllPhotos',
            },
          },
        ],
      },
    },
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
