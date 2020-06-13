import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

const defTmdbUrl = 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png';
const posterPathBaseUrl = 'https://image.tmdb.org/t/p/w500'

export default class MoviesDetails extends PureComponent {

    render() {
        const { navigation } = this.props;
        console.log("poster path: " + posterPathBaseUrl + navigation.getParam('poster_path', defTmdbUrl))
        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
                    <Text style={styles.description}>{navigation.getParam('title', 'Movies Name')}</Text>
                    <Text style={styles.description}>{navigation.getParam('vote_average', '0.0')}</Text>
                </View>
                <Image source={{uri: posterPathBaseUrl + navigation.getParam('poster_path', defTmdbUrl)}} style={styles.image} />
                <Text style={styles.description}>{navigation.getParam('overview', 'Movies description')}</Text>
            </View>
        );
    }
}


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
    headerView: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'space-between'
      },
});