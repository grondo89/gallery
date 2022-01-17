import React, {FC} from 'react';
import {Dimensions, Image} from 'react-native';
import {NavigationFunctionComponent} from 'react-native-navigation';

type PhotoThumbnailProps = {
  photoUrl: string;
};

const PhotoThumbnail: FC<PhotoThumbnailProps> = ({photoUrl}) => {
  const windowHeight = Dimensions.get('window').width;

  return (
    <Image
      source={{uri: photoUrl}}
      style={{width: windowHeight / 3, height: windowHeight / 3}}></Image>
  );
};

export default PhotoThumbnail;
