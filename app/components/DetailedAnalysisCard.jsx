import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailedAnalysisCard = ({ vendorName, vendorContact }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{vendorName}</Text>
      <Text style={styles.contact}>{vendorContact}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contact: {
    fontSize: 16,
    color: '#888',
  },
});

export default DetailedAnalysisCard;
