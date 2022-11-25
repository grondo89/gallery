import React, {useEffect, useState} from 'react';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
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
import {getPhotos} from '../../api/photos/photosRequests';

const AllPhotosScreen: NavigationFunctionComponent = props => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchPhotos = async () => {
    const res = await getPhotos();
    await setPhotos(res);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const renderItem = (item: any) => {
    return (
      <TouchableHighlight
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'FullSizePhoto',
              passProps: {
                photoUrl: item.item.url,
              },
              options: {
                topBar: {
                  title: {
                    text: 'Settings',
                  },
                },
              },
            },
          })
        }>
        <PhotoThumbnail photoUrl={item.item.url} />
      </TouchableHighlight>
    );
  };

  return photos.length > 0 ? (
    <SafeAreaView style={styles.container}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <View
            style={{
              backgroundColor: 'yellow',
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
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  loadingContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5FCFF88',
    opacity: 0.7,
  },
});

export default AllPhotosScreen;
