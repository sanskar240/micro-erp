import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native" // Importing icons from Expo
import StoreFinancesDisplay from '../components/StoreFinancesDisplay';


const StoreFinances = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <StoreFinancesDisplay/>
      </View>
      <TouchableOpacity   
        onPress={()=>{
          navigation.navigate('StoreForm');
        }}
        style={styles.floatingButton}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flex: 1, // Take up all available space
    justifyContent: 'flex-start', // Align children at the top
    alignItems: 'center',
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    elevation: 8,
  },
});

export default StoreFinances;

