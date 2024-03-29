import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { FAB } from 'react-native-paper';
import InventoryForm from '../components/InventoryForm';// Import your form component

const AddInventory = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(true); // Show the form component when FAB is pressed
  };

  return (
    <View style={{ flex: 1 }}>
     <InventoryForm/>
    </View>
  );
};

const styles = {
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
};

export default AddInventory;