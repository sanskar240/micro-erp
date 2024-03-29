import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import {useNavigation } from "@react-navigation/native"

const Finances = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Inventory Finances</Text>
        <Button title="View Details" onPress={()=>{
            navigation.navigate("InventoryFinances");
        }} />
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Store Finances</Text>
        <Button title="View Details" onPress={()=>{
           navigation.navigate("StoreFinances");
        }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginVertical: 12,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '80%', // Set a fixed width for both cards
    height: 150, // Set a fixed height for both cards
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
})

export default Finances;
