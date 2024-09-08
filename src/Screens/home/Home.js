import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import avatar from '../../../assets/images/avatar.png';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Places} from '../../data/data.js';
import {styles} from './style.js';

const Home = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.placeItem}
      onPress={() => navigation.navigate('Details', {item})}>
      <Image source={{uri: item.image}} style={styles.placeImage} />
      <View style={styles.placeInfo}>
        <Text style={styles.placeTitle}>{item.title_en}</Text>
        <Text style={styles.placeLocation}>{item.location_en}</Text>
        <View style={styles.placeRating}>
          <Text style={styles.placeRatingText}>{item.rating}</Text>
          <Text style={styles.placeRatingIcon}>★</Text>
        </View>
      </View>
    </TouchableOpacity>
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
        horizontal
        data={Places}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.placesList}
      />
    </SafeAreaView>
  );
};

export default Home;
