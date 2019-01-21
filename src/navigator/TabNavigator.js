import * as React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from '../containers/Home';
import CompletedTask from '../containers/CompletedTask';
import InCompleteTask from '../containers/InCompleteTask';
import { Ionicons } from 'react-native-vector-icons'; 
import Header from '../Components/Header';

 
const CustomTabNavigator = createBottomTabNavigator({

    Home: {
      screen: Home,
     
    },
     CompletedTask: {
      screen: CompletedTask,
    },
    Pending: {
      screen: InCompleteTask,
        navigationOptions: ({ navigation }) => ({
         header : <Header title = "In Complete" />
      }),
    },
},
  {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: '#f26c1f',
        inactiveTintColor: 'gray',
      },
    


    },
    

{

  initialRouteName :"Home"
}
);


const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
   
    iconName = `ios-home${focused ? '' : ''}`;
   
  
  } else if (routeName === 'CompletedTask') {
    iconName = `ios-contact${focused ? '' : ''}`;
  }
  else if (routeName === 'Pending') {
    iconName = `ios-calendar${focused ? '' : ''}`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

export default CustomTabNavigator;
 
