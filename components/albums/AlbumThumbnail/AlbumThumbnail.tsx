import React, {FC} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

type AlbumThumbnailProps = {
  photoUrl: string;
  quantity: string;
  title: string;
};
const windowWidth = Dimensions.get('window').width;

const AlbumThumbnail: FC<AlbumThumbnailProps> = ({
  photoUrl,
  quantity,
  title,
}) => {
  return (
    <View style={{flex: 1 / 2, marginLeft: '1%', marginBottom: 10}}>
      <Image source={{uri: photoUrl}} style={styles.AlbumThumbnail}></Image>
      <View>
        <Text style={styles.albumTitle}>{title}</Text>
        <Text style={styles.albumQuantity}>{quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  AlbumThumbnail: {
    width: 182,
    height: 182,
    borderRadius: 5,
  },

  albumTitle: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 2,
    fontSize: 16,
  },
  albumQuantity: {
    color: 'grey',
    fontSize: 16,
  },
});

export default AlbumThumbnail;
