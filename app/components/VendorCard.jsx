import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VendorCard = ({name,phone}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 20, // Increased padding
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '80%',
        alignSelf: 'center',
      },
      name: {
        fontSize: 22, // Increased font size
        fontWeight: 'bold',
        marginBottom: 10, // Increased margin
        color: '#333333',
      },
      phone: {
        fontSize: 18, // Increased font size
        color: '#666666',
      },
});

export default VendorCard;
