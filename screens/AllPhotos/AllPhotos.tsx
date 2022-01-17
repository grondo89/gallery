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
      {!isLoading && (
        <View style={styles.loadingContainer}>
          <View
            style={{
              //   display: 'flex',
              //   justifyContent: 'center',
              backgroundColor: 'yellow',
              //   width: '100%',
              //   marginTop: 250,
              //   alignItems: 'center',
              //   margin: 'auto',
            }}>
            <ActivityIndicator color={'grey'} size="large" />
          </View>
        </View>
      )}
      <FlatList data={photos} renderItem={renderItem} numColumns={3} />
    </SafeAreaView>
  ) : (
    <View>
      <Text>lalalal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#F5FCFF88',
    opacity: 0.7,
  },
});

export default AllPhotosScreen;
