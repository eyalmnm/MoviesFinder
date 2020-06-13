import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

const posterPathBaseUrl = 'https://image.tmdb.org/t/p/w500'

const MoviesCard = ({ title, poster_path, vote_average, overview, navigation }) => {
    return (<TouchableOpacity style={{backgroundColor: 'transparent'}} onPress={() => navigation.navigate('MoviesDetails', {title, poster_path, vote_average, overview,})} >
        <View style={styles.listItemContainer}>
            <Image source={{uri: posterPathBaseUrl + poster_path}} style={styles.moviesImage} />
            <Text style={styles.moviesItemHeader}>{title}</Text>
        </View>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
    listItemContainer: {
        borderStyle: 'solid',
        borderColor: '#FFF',
        borderBottomWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    moviesItemHeader: {
        fontSize: 18,
        color: '#656565',
        textAlign: 'left',
        marginStart: 5,
    },
    moviesImage: {
      backgroundColor: 'transparent',
      width: 50,
      height: 50,
    },
});

export default MoviesCard;