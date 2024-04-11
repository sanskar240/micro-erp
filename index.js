import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
import { registerRootComponent } from 'expo';
import React from 'react';
import { View } from 'react-native';
import App from './App';

const Main = () => (
  <View style={{ flex: 1 }}>
    <App />
  </View>
);

registerRootComponent(Main);
