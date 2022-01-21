// In index.js of a new project
import React from 'react';
import {Navigation} from 'react-native-navigation';
import AllPhotosScreen from './screens/AllPhotos/AllPhotosScreen';
import AllAlbumsScreen from './screens/AllAlbums/AllAlbumsScreen';
import FullSizePhotoScreen from './screens/FullSizePhoto/FullSizePhotoScreen';
import AlbumPhotosScreen from './screens/AlbumPhotos/AlbumPhotosScreen';

AllPhotosScreen.options = {
  topBar: {
    title: {
      text: 'All Photos',
    },
  },
};

AllAlbumsScreen.options = {
  topBar: {
    title: {
      text: 'Albums',
    },
  },
};

Navigation.registerComponent('AllPhotos', () => AllPhotosScreen);
Navigation.registerComponent('AllAlbums', () => AllAlbumsScreen);
Navigation.registerComponent('FullSizePhoto', () => FullSizePhotoScreen);
Navigation.registerComponent('AlbumPhotos', () => AlbumPhotosScreen);

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
      color: 'black',
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
              name: 'AllAlbums',
            },
          },
        ],
      },
    },
  });
});
