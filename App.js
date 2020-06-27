import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import UserInfo from './components/UserInfo';

export default class App extends React.Component {
  render() {
    const stack = createStackNavigator();
    return (
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="Home" component={Home} />
          <stack.Screen name="UserInfo" component={UserInfo} />
        </stack.Navigator>
      </NavigationContainer>
    );
  }
}