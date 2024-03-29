import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import {useNavigation} from  "@react-navigation/native"
import {addDoc,collection} from "@firebase/firestore"
import { firestore } from '../config/Firebase';

const InventoryForm = () => {
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [vendorName,setVendorName] = useState('');
  const [vendorContact,setVendorContact] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      console.log('Form Data:', { title, price, quantity }); 


      if (!title || !quantity || !price) {
        Alert.alert('Error', 'Please fill in all fields.');
        return; 
      }

      //add data to firestore
      await addDoc(collection(firestore, 'inventory'), {
        title: title,
        quantity: parseInt(quantity),
        price: parseFloat(price),
        vendorName:vendorName,
        vendorContact:parseFloat(vendorContact)
      });

     
      Alert.alert('Success', 'Inventory item added successfully!');

      setTitle('');
      setQuantity('');
      setPrice('');


    } catch (error) {
      
      Alert.alert('Error', 'Failed to add inventory item. Please try again.');
    }
  };

  return (
    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Item Name"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Quantity"
        keyboardType="numeric"
        value={quantity}
        onChangeText={text => setQuantity(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={text => setPrice(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Vendor Name"
       
        value={vendorName}
        onChangeText={text => setVendorName(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Vendor Contact"
       
        value={vendorContact}
        onChangeText={text => setVendorContact(text)}
      />

      <Button title="Submit" onPress={()=>{
        handleSubmit();
        navigation.navigate('Inventory')
        
      }} />
    </View>
  );
};

export default InventoryForm;
