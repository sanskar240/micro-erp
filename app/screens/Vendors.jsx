import React,{useState} from "react";

import { collection } from "@firebase/firestore";
import { View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import VendorCard from '../components/VendorCard';
import { getDocs } from '@firebase/firestore';
import { useEffect } from 'react';
import { FlatList } from "react-native";

const Vendors = () => {
  const navigation = useNavigation();
  const [vendorItems,setVendorItems] = useState([]);

  useEffect(() => {
    const fetchVendorData = async () => {
      try {
        const vendorRef = collection(firestore, 'vendors');
        const vendorSnapshot = await getDocs(vendorRef);
        const items = vendorSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setVendorItems(items);
      } catch (error) {
        console.error('Error fetching inventory data:', error);
      }
    };
    

    fetchVendorData();
  }, []); 
  const renderItem = ({ item }) => (
    <VendorCard 
      key={item.id} 
      name = {item.name}
      phone  = {item.phone}
      // Pass deleteItem with item id as onDelete prop
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
});

export default Vendors;
