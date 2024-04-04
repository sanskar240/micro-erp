import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from './app/screens/Home';
import Inventory from './app/screens/Inventory';
import Login from './app/screens/Login';
import AddInventory from './app/screens/AddInventory';
import Analysis from './app/screens/Analysis';
import Finances from './app/screens/Finances';
import InventoryFinances from './app/screens/InventoryFinances';
import StoreFinances from './app/screens/StoreFinances';
import StoreForm from './app/components/StoreForm';
import Vendors from './app/screens/Vendors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Inventory"
      component={Inventory}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Finances"
      component={Finances} // Use the Finances screen component
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="bag" size={size} color={color} />
        ),
      }}
    />
     <Tab.Screen
      name="Vendors"
      component={Vendors} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="basketball" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="AddInventory" component={AddInventory} options={{ headerShown: true }} />
        <Stack.Screen name="Analysis" component={Analysis} options={{ headerShown: true }} />
        <Stack.Screen name="InventoryFinances" component={InventoryFinances} options={{ headerShown: true }} />
        <Stack.Screen name="StoreFinances" component={StoreFinances} options={{ headerShown: true }} />
        <Stack.Screen name="StoreForm" component={StoreForm} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

