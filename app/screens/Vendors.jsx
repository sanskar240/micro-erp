import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import VendorCard from '../components/VendorCard';
import { collection, getFirestore, getDocs } from 'firebase/firestore';

const Vendors = () => {
  const navigation = useNavigation();
  const [vendorItems, setVendorItems] = useState([]);

  useEffect(() => {
    const fetchVendorData = async () => {
      try {
        const firestore = getFirestore(); // Initialize Firestore instance
        const vendorRef = collection(firestore, 'vendors');
        const querySnapshot = await getDocs(vendorRef);
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setVendorItems(items);
      } catch (error) {
        console.error('Error fetching vendor data:', error);
      }
    };

    fetchVendorData();
  }, []); 

  const renderItem = ({ item }) => (
    <VendorCard 
      key={item.id} 
      name={item.name}
      phone={item.phone}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={vendorItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContent}
      />

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          navigation.navigate('VendorForm');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: 'purple', 
  },
  flatListContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default Vendors;
