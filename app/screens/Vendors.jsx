import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import VendorCard from '../components/VendorCard';

const Vendors = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <VendorCard/>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
         navigation.navigate('VendorForm');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'purple', 
  },
});

export default Vendors;
