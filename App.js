import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import React from 'react';
import { Text } from 'react-native';
import Home from './Home';
import Movies from './Movies'


const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Movies: { screen: Movies },
});

const App = createAppContainer(AppNavigator)

export default App;