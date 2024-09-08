import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  placeItem: {
    width: 250,
    borderRadius: 10,
    overflow: 'hidden',
  },
  placeImage: {
    width: '100%',
    height: 300,
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
    color: 'lightgrey',
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
  detailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  activeTab: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  inactiveTab: {
    fontSize: 16,
    color: 'grey',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginTop: 10,
  },
  bookButton: {
    marginTop: 20,
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
