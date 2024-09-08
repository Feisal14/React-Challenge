import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../Screens/home/Home';
import OrderScreen from '../Screens/tabs/OrderScreen';
import WishListScreen from '../Screens/tabs/WishListScreen';
import ProfileScreen from '../Screens/tabs/ProfileScreen';
import images from '../../assets/images/icons';
import Details from '../Screens/home/Details';

const Stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <tab.Navigator>
      <tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <Image source={images.home} style={{height: 30, width: 30}} />
          ),
        }}
      />
      <tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          title: 'Order',
          tabBarIcon: ({focused}) => (
            <Image source={images.order} style={{height: 30, width: 30}} />
          ),
        }}
      />
      <tab.Screen
        name="WishList"
        component={WishListScreen}
        options={{
          title: 'WishList',
          tabBarIcon: ({focused}) => (
            <Image source={images.wishlist} style={{height: 30, width: 30}} />
          ),
        }}
      />
      <tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused}) => (
            <Image source={images.profile} style={{height: 30, width: 30}} />
          ),
        }}
      />
    </tab.Navigator>
  );
};

export default MyStack;
