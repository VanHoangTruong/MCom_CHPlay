import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {createMaterialTopTabNavigator} from 'react-navigation'
import Mot from './HomeScreenDetails/Mot'
import Hai from './HomeScreenDetails/Hai'
import Ba from './HomeScreenDetails/Ba'
import Bon from './HomeScreenDetails/Bon'
import Nam from './HomeScreenDetails/Nam'

const Home = createMaterialTopTabNavigator(
  {
    Mot: {
      screen: Mot,
      navigationOptions: {
        header:null,
        title:'Dành cho bạn',
        headerTitleStyle: { 
          textAlign:"left",
          marginLeft:0
        },
        tabBarIcon: ({ focused, tintColor }) => {
          return <Image style={{ width: 15, height: 15, marginTop:7 }}
                        source={require('./imgs/dcb.png')}
                  />;
        },
        
      },
    },
    Hai: {
      screen: Hai,
      navigationOptions: {
        header:null,
        title:'Bảng xếp hạ...',
        tabBarIcon: ({ focused, tintColor }) => {
          return <Image style={{ width: 15, height: 15, marginTop:7 }}
                        source={require('./imgs/loai.png')}
                  />;
        },
        
      }
    },
    Ba: {
      screen: Ba,
      navigationOptions: {
        header:null,
        title:'Lựa chọn củ...',
        tabBarIcon: ({ focused, tintColor }) => {
          return <Image style={{ width: 15, height: 15, marginTop:7}}
                        source={require('./imgs/bxh.png')}
                  />;
        },
        
      }
    },
    Bon: {
      screen: Bon,
      navigationOptions: {
        header:null,
        title:'Gia đình',
        tabBarIcon: ({ focused, tintColor }) => {
          return <Image style={{ width: 15, height: 15, marginTop:7 }}
                        source={require('./imgs/giadinh.png')}
                  />;
        },
        
      }
    },
    Nam: {
      screen: Nam,
      iconSize:10,
      navigationOptions: {
        header:null,
        title:'Quyền truy...',
        tabBarIcon: ({ focused, tintColor }) => {
          return <Image style={{ width: 15, height: 15, marginTop:7}}
                        source={require('./imgs/quyen.png')}
                  />;
        },
        
        
      }
    },
  },
  {
    tabBarPosition: 'top',
    animationEnabled:true,
    swipeEnabled:false,
    lazy:'true',
    style:{
      backgroundColor:'white',
      shadowColor: 'gray',
      shadowRadius:5,
     
    },
    initialLayout:{
      height:30,
      width:80
    },
    tabBarOptions: {
      tabStyle:{
        width:100,
        height:45,
        marginLeft:5,
        marginRight:5,
      },
      showIcon:true,
      upperCaseLabel:false,
      activeTintColor: 'green',
      labelStyle: {
        fontSize: 10,
      },
      
      inactiveTintColor: 'gray',
      style: {
          backgroundColor: 'white ',
      },
      indicatorStyle: {
          backgroundColor: 'white',
      },
      scrollEnabled: true,
      backgroundColor:'white'
    }
}
);


export default Home;
