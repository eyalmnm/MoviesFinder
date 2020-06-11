import React from 'react';
import AppNavigator from './AppNavigator';

// Ref: https://www.digitalocean.com/community/tutorials/react-react-native-navigation

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      possibleFriends: [
        'Allie',
        'Gator',
        'Lizzie',
      ],
      currentFriends: [],
    }
  }
    render() {
        return (
        <AppNavigator/>
        );
    }
}