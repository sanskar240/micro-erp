import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

const InventoryCard = ({ title, quantity, price, onDelete }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>Quantity: {quantity}</Text>
      <Text style={styles.info}>Price: {price}</Text>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Analysis');
      }} style={styles.analysisButton}>
        <Text style={styles.analysisButtonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
    elevation: 4,
    width: '80%',
    alignSelf: 'flex-start',
    // Move the card slightly up
    marginTop: -12, // Adjust this value as needed
    // Align the card to the left
    marginLeft: 16, // Adjust this value as needed
    // Add shadow properties for elevation effect (Android)
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  info: {
    fontSize: 18,
    marginBottom: 8,
  },
  deleteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  analysisButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'blue',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  analysisButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default InventoryCard;

