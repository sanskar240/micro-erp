import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
import VendorForm from './app/components/VendorForm';
import Payments from './app/screens/Payments';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Inventory" component={Inventory} />
    <Drawer.Screen name="Finances" component={Finances} />
    <Drawer.Screen name="Vendors" component={Vendors} />
    <Drawer.Screen name="Payments" component={Payments} />
  </Drawer.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="AddInventory" component={AddInventory} options={{ headerShown: true }} />
        <Stack.Screen name="Analysis" component={Analysis} options={{ headerShown: true }} />
        <Stack.Screen name="InventoryFinances" component={InventoryFinances} options={{ headerShown: true }} />
        <Stack.Screen name="StoreFinances" component={StoreFinances} options={{ headerShown: true }} />
        <Stack.Screen name="StoreForm" component={StoreForm} options={{ headerShown: true }} />
        <Stack.Screen name="VendorForm" component={VendorForm} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
