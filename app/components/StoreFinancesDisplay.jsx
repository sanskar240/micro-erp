import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StoreFinancesDisplay = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.transactionId}>id</Text>
      <Text style={styles.itemName}>name</Text>
      <Text style={styles.price}>price</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent', // Set border color to transparent
  },
  transactionId: {
    flex: 1,
  },
  itemName: {
    flex: 2,
    fontWeight: 'bold',
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
});

export default StoreFinancesDisplay;
