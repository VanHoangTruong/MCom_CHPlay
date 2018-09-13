import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Dimensions,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Image
} from 'react-native';

import {createMaterialTopTabNavigator,createStackNavigator} from 'react-navigation'
import HomeScreen from './Screens/HomeScreen'
import GameScreen from './Screens/GameScreen'
import MovieScreen from './Screens/MovieSceen'
import BookScreen from './Screens/BookScreen'
import SearchBar from 'react-native-searchbar'



const Home = createMaterialTopTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        header:null,
        title:'Home',
      }
    },
    GameScreen: {
      screen: GameScreen,
      navigationOptions: {header:null,title:'Game'}
    },
    MovieScreen: {
      screen: MovieScreen,
      navigationOptions: {header:null,title:'Movie'}
    },
    BookScreen: {
      screen: BookScreen,
      navigationOptions: {header:null,title:'Book'}
    },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled:false,
    tabBarOptions: {
      tabStyle:{
        width:100
      },
      activeTintColor: 'white',
      inactiveTintColor: 'white',
      style: {
          backgroundColor: '#25aa27',
      },
      indicatorStyle: {
          backgroundColor: 'white',
      },
      scrollEnabled: true,
    }
}
);  
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    elevation: 2,
    shadowRadius: 5,
    backgroundColor:'white',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 5,
    flexDirection:'row'
  }
});

 const App = createStackNavigator(
   {
     Home: {
       screen: Home,
       navigationOptions: {
        gesturesEnabled: false, 
        header: 
        <View
        style={{backgroundColor: '#25aa27'}}
        >
<View  style={[styles.container]}>
          <TouchableOpacity>
            <View style={{flex:2,
                          marginLeft:5
                          }}>
              <Image style={{ width: 50, height: 50, marginLeft: 5, marginRight: 5 }}
                          source={require('./Screens/imgs/menu.png')}
                    />
            </View>
          </TouchableOpacity>  
          <View  style={{flex:8}}>
            <TextInput style={[
                  styles.input,
                  {
                    fontSize: 20,
                    color: 'gray',
                    fontFamily: 'System',
                   
                  }
                ]}
                underlineColorAndroid="transparent"
                returnKeyType="search"
                    >Google Play</TextInput>
          </View>
          <TouchableOpacity>
            <View  style={{flex:1,
                          marginRight:5}}>
              <Image style={{ width: 30, height: 30, marginRight:1, marginTop: 10, tintColor:'gray' }}
                          source={require('./Screens/imgs/voice.png')}
                    />
            </View>
          </TouchableOpacity>
        </View>
        </View>
        
       }
     }
   }
 )

 
export default App;
