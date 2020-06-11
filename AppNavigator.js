import {createStackNavigator} from 'react-navigation'
import Home from './Home'
import Movies from './Movies'

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Movies: { screen: Movies },
});