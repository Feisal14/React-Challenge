import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import avatar from '../../assets/images/avatar.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Places} from '../data/data';

const Home = () => {
  const renderItem = ({item}) => (
    <View style={styles.placeItem}>
      <Image source={{uri: item.image}} style={styles.placeImage} />
      <View style={styles.placeInfo}>
        <Text style={styles.placeTitle}>{item.title_en}</Text>
        <Text style={styles.placeLocation}>{item.location_en}</Text>
        <View style={styles.placeRating}>
          <Text style={styles.placeRatingText}>{item.rating}</Text>
          <Text style={styles.placeRatingIcon}>★</Text>
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={styles.greeting}>Hi David, 👋</Text>
          <Text style={{fontSize: 20}}>Explore the world</Text>
        </View>
        <Image source={avatar} style={styles.avatar} />
      </View>

      <View style={styles.searchContainer}>
        <TextInput placeholder="Search places" style={styles.searchInput} />
      </View>

      <View style={styles.popPlaces}>
        <Text style={styles.popTitle}>Popular places</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity style={[styles.categoryButton, styles.activeButton]}>
          <Text style={[styles.categoryText, styles.activeText]}>
            Most Viewed
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Nearby</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text style={styles.categoryText}>Latest</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        onPres
        data={Places}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.placesList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  avatar: {
    width: 50,
    height: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
  },
  popPlaces: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  popTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    fontSize: 14,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f3f3f3',
    borderRadius: 20,
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: '#000',
  },
  categoryText: {
    fontSize: 14,
    color: '#999',
  },
  placesList: {
    paddingRight: 20,
    paddingBottom: 20,
  },
  placeItem: {
    marginLeft: 20,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  placeImage: {
    width: '100%',
    height: 200,
  },
  placeInfo: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  placeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  placeLocation: {
    fontSize: 14,
    color: 'grey',
  },
  placeRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  placeRatingText: {
    fontSize: 14,
    color: 'white',
    marginRight: 5,
  },
  placeRatingIcon: {
    fontSize: 14,
    color: '#ffd700',
  },
});

export default Home;
