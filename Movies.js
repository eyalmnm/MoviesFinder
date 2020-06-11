'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ActivityIndicator, Image, } from 'react-native';

export default class Movies extends React.Component {
    render() {
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
                    onPress={() =>this.props.navigation.navigate('Movies')}
                    color='#48BBEC'
                    title='Google'
                    />
                </View>
                <View style={{flex:0.5 , marginLeft:5}} >
                    <Button style={styles.button}
                    onPress={() =>this.props.navigation.navigate('Movies')}
                    color='#48BBEC'
                    title='Facebook'
                    />
                </View>
            </View>
            </View>
        );
    }
}