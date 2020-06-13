'use strict';

import React, { PureComponent } from 'react';
import { StyleSheet, Text, FlatList, View, TouchableOpacity, ActivityIndicator, Image, } from 'react-native';
import MoviesCard from './MoviesCard'


const tmdbUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=a9bc1e5ee1bd399be8f1812027534e2d&language=en-US&page=1'
const posterPathBaseUrl = 'https://image.tmdb.org/t/p/w500'


export default class Movies extends React.PureComponent {
    // State Holder
    state = {
        moviesList: [],
        loading: true,
    }

    static navigationOptions = {
        title: 'Movies List'
    }

    async componentDidMount() {
        try {
            const moviesApiCall = await fetch(tmdbUrl);
            const apiResponse = await moviesApiCall.json();
            this.setState({moviesList: apiResponse.results, loading: false});
        } catch(err) {
            console.log("Error occurs while fetching data", err);
        }
    }

    render() {
        const { moviesList, loading } = this.state;
        const { navigation } = this.props;
        if(loading) {
            return (<ActivityIndicator />)
        } else {
            return (
                <FlatList 
                    data={moviesList}
                    renderItem={(data) => <MoviesCard {...data.item } navigation={ navigation } />}
                    keyExtractor={(item) => [item.title, item.poster_path, item.vote_average, item.overview]}
                />
            )
        }
    }
}