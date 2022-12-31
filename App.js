import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import StarScreen from './screens/StarScreen';
import { Icon } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }
}

const AppStackNavigator = createStackNavigator({
  Home : {
    screen: HomeScreen,
    navigationOptions: {
      headerTitleStyle: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 30
      },
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  },

  StarScreen : {
    screen: StarScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Star Description",
      headerTitleStyle: {
        color: 'cyan',
        fontSize: 30
      },
      headerStyle: {
        backgroundColor: 'yellow'
      },
      headerLeft: () => <Icon name = "left_arrow" size = {30} onPress = {() => {navigation.goBack()}} color = "red" containerStyle = {{margin: 10}} activeOpacity = {0.8}/>
    })
  }
},

{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppStackNavigator)