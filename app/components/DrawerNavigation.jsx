import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Inventory from './Inventory';
import Finances from './Finances';
import Vendors from './Vendors';
import Payments from './Payments';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Inventory"
        component={Inventory}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Finances"
        component={Finances}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bag" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Vendors"
        component={Vendors}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="basketball" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Payments"
        component={Payments}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="money" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
