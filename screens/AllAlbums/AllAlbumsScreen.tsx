import React, {FC, useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const fakeAlbums = [
  {
    url: 'https://formacionalcuadrado.com/wp-content/uploads/woocommerce-placeholder.png',
    title: 'Recents',
    quantity: '50',
    id: 1,
  },
  {
    url: 'https://formacionalcuadrado.com/wp-content/uploads/woocommerce-placeholder.png',
    title: 'WhatsApp',
    quantity: '50',
    id: 2,
  },
  {
    url: 'https://formacionalcuadrado.com/wp-content/uploads/woocommerce-placeholder.png',
    title: 'Favourites',
    quantity: '50',
    id: 3,
  },
  {
    url: 'https://formacionalcuadrado.com/wp-content/uploads/woocommerce-placeholder.png',
    title: 'Instagram',
    quantity: '50',
    id: 4,
  },
  {
    url: 'https://formacionalcuadrado.com/wp-content/uploads/woocommerce-placeholder.png',
    title: 'Memories',
    quantity: '50',
    id: 5,
  },
];

import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {groupBy, countBy} from 'lodash';

import AlbumThumbnail from '../../components/albums/AlbumThumbnail/AlbumThumbnail';
import PhotoThumbnail from '../../components/photos/PhotoThumbnail/PhotoThumbnail';

type AllAlbumsProps = {
  albumId: string;
};

type Photo = {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const AllAlbums: NavigationFunctionComponent = props => {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photoQtyByAlbum, setPhotoQtyByAlbum] = useState({});

  // async function getAlbums() {
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch(
  //       'https://jsonplaceholder.typicode.com/albums',
  //     );
  //     const allAlbums = await response.json();
  //     await setAlbums(allAlbums);
  //   } catch (err) {
  //     console.log(err);
  //     setError(true);
  //   }
  //   setIsLoading(false);
  // }
  // useEffect(() => {
  //   getAlbums();
  // }, []);

  // async function getPhotos() {
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch(
  //       'https://jsonplaceholder.typicode.com/photos',
  //     );
  //     const allPhotos = await response.json();
  //     await setPhotos(allPhotos);
  //     setPhotoQtyByAlbum(countBy(allPhotos, 'albumId'));
  //   } catch (err) {
  //     console.log(err);
  //     setError(true);
  //   }
  //   setIsLoading(false);
  // }
  // useEffect(() => {
  //   getPhotos();
  // }, []);

  const renderItem = (item: any) => {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableHighlight
          onPress={() =>
            Navigation.push(props.componentId, {
              component: {
                name: 'FullSizePhoto',
                passProps: {
                  photoUrl: item.item.url,
                  quantity: item.item.quantity,
                  title: item.item.title,
                  albumId: item.item.id,
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
          <AlbumThumbnail
            photoUrl={item.item.url}
            quantity={item.item.quantity}
            title={item.item.title}
          />
        </TouchableHighlight>
      </View>
    );
  };

  return fakeAlbums.length > 0 ? (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {/* {!isLoading && (
          <View style={[styles.loadingContainer]}>
            <View
              style={{
                backgroundColor: 'yellow',
              }}>
              <ActivityIndicator color={'grey'} size="large" />
            </View>
          </View>
        )} */}
        <View>
          <Text style={styles.header}> My Albums</Text>
        </View>
        <View
          style={{
            marginTop: 15,
          }}>
          <FlatList data={fakeAlbums} renderItem={renderItem} numColumns={2} />
        </View>
      </View>
    </SafeAreaView>
  ) : (
    <View>
      <Text>lalaasdadasxslal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  innerContainer: {
    padding: 5,
  },
  header: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },
  loadingContainer: {
    backgroundColor: 'yellow',
    opacity: 0.7,
  },
});

export default AllAlbums;
