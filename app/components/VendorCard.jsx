import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VendorCard = ({ name, phone }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff', 
    borderRadius: 10, 
    padding: 20,
    marginBottom: 20,
    shadowColor: '#ccc', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, 
    shadowRadius: 4, 
    elevation: 5, 
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1, 
    borderColor: '#ddd', 
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333', 
    marginBottom: 10,
  },
  phone: {
    fontSize: 18,
    color: '#666',
  },
});

export default VendorCard;

