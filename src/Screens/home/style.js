import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    borderRadius: 30,
    overflow: 'hidden',
  },
  placeImage: {
    width: 300,
    height: 300,

  },
  placeInfo: {
    paddingVertical: 30, 
    paddingHorizontal: 15, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeTitle: {
    fontSize: 15,
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
