import React, {useEffect, useState} from 'react';
import {NavigationFunctionComponent} from 'react-native-navigation';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import PhotoThumbnail from '../../components/photos/PhotoThumbnail/PhotoThumbnail';

const AllPhotosScreen: NavigationFunctionComponent = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getPhotos() {
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/photos',
      );
      const allPhotos = await response.json();
      await setPhotos(allPhotos);
    } catch (err) {
      console.log(err);
      setError(true);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    getPhotos();
  }, []);

  const renderItem = (item: any) => {
    return (
      <TouchableHighlight onPress={() => null}>
        <PhotoThumbnail photoUrl={item.item.thumbnailUrl} />
      </TouchableHighlight>
    );
  };

  return photos.length > 0 ? (
    <SafeAreaView>
      <View style={{alignSelf: 'stretch'}}>
        {!isLoading && <ActivityIndicator color={'black'} size="large" />}
        <FlatList data={photos} renderItem={renderItem} numColumns={3} />
      </View>
    </SafeAreaView>
  ) : (
    <View>
      <Text>lalalal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AllPhotosScreen;
