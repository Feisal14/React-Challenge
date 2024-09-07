import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MyStack from './src/stacks/MyStack';


const App = () => {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
};

export default App;
