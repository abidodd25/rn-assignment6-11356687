import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ourstory from './Components/Ourstory';
import checkout from './Components/checkout';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    initialRouteName="ourstory"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'ourstory') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'checkout') {
          iconName = focused ? 'cart' : 'cart-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen
      name="ourstory"
      component={ourstory}
      options={{ headerShown: false, title: 'Home' }}
    />
    <Tab.Screen
      name="checkout"
      component={checkout}
      options={{ headerShown: false, title: 'Checkout' }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
