import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../config/Firebase'; // Import your Firestore instance
import InventoryCard from '../components/InventoryCard';

const Inventory = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchInventoryData = async () => {
      try {
        const inventoryRef = collection(firestore, 'inventory');
        const inventorySnapshot = await getDocs(inventoryRef);
        const items = inventorySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setInventoryItems(items);
      } catch (error) {
        console.error('Error fetching inventory data:', error);
      }
    };

    fetchInventoryData();
  }, []); // Run only once on component mount

  const renderItem = ({ item }) => (
    <InventoryCard key={item.id} title={item.title} quantity={item.quantity} price={item.price} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={inventoryItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContent}
      />
      <FAB
        color='purple'
        style={styles.fab}
        icon="plus"
        onPress={() => {
          navigation.navigate('AddInventory');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  flatListContent: {
    paddingBottom: 70, // Adjust as needed to accommodate the FAB button
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Inventory;

