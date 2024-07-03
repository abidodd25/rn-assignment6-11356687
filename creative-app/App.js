import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppNavigator from './AppNavigator';
import { CartProvider } from './context/CartContext';

const Stack = createStackNavigator();

const App = () => (
  <CartProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={AppNavigator} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  </CartProvider>
);

export default App;
