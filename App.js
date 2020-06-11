'use strict';

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ActivityIndicator, Image, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
    return (
        <View style={styles.container}>
          <Text style={styles.description}>
              Search for movies to watch!
          </Text>
          <Image source={require('./Resources/movie-512.png')} style={styles.image} />
          <Text style={styles.description}>
              Please login in order to use this service!
          </Text>
          <View style={styles.buttonsView}>
            <View style={{flex:0.5 , marginRight:5}} >
              <Button style={styles.button}
                  onPress={() =>{}}
                  color='#48BBEC'
                  title='Google'
                />
              </View>
              <View style={{flex:0.5 , marginLeft:5}} >
                <Button style={styles.button}
                  onPress={() =>{}}
                  color='#48BBEC'
                  title='Facebook'
                />
              </View>
          </View>
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        padding: 30,
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1,
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
        marginTop: 6,
    },
    image: {
      marginTop: 45,
      marginBottom: 45,
      width: 138,
      height: 138,
      margin: 10,
    },
    buttonsView: {
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'stretch',
      justifyContent: 'space-between'
    },
    button: {
      height: 40,
      width: 200,
    }
});