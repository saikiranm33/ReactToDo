import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import Home from './src/containers/Home'
import CompletedTask from './src/containers/CompletedTask'
import InCompleteTask from './src/containers/InCompleteTask'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import store from './src/store/index'
import CustomTabNavigator from './src/navigator/TabNavigator'



export default class App extends React.Component {
   
   constructor(props)
   {

     super(props)
   }
  render() {

    return (
      <Provider store = {store}>

         <Container />
         
        </Provider>
    );
  }
}




const Container = createAppContainer(CustomTabNavigator);


