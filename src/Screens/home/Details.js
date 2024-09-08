import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './style.details';

const Details = ({route}) => {
  const {item} = route.params;

  return (
    <View style={styles.container}>
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

      <View style={styles.detailsContainer}>
        <View style={styles.tabContainer}>
          <Text style={styles.activeTab}>Overview</Text>
          <Text style={styles.inactiveTab}>Details</Text>
        </View>

        {/* Icons and Information */}
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Text>🕒 8 hours</Text>
          </View>
          <View style={styles.infoItem}>
            <Text>🌡 16°C</Text>
          </View>
          <View style={styles.infoItem}>
            <Text>⭐ 4.5</Text>
          </View>
        </View>

        {/* Description */}
        <Text style={styles.description}>
          TThis vast mountain range is renowned for its remarkable diversity in
          terms of topography and climate. It features towering peaks, active
          volcanoes, deep canyons, expansive plateaus, and lush valleys. The
          Andes are also home to
        </Text>

        {/* Book Now Button */}
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
