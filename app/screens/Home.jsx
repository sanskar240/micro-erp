import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.item, { backgroundColor: '#FFC107' }]}>
          <Text style={styles.itemText}>Dashboard Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item, { backgroundColor: '#03A9F4' }]}>
          <Text style={styles.itemText}>Dashboard Item 2</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.item, { backgroundColor: '#4CAF50' }]}>
          <Text style={styles.itemText}>Dashboard Item 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.item, { backgroundColor: '#FF5722' }]}>
          <Text style={styles.itemText}>Dashboard Item 4</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  item: {
    flex: 1,
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default HomeScreen;
