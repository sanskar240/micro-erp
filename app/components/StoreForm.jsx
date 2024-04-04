import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { firestore } from '../config/Firebase';
import { addDoc, collection } from '@firebase/firestore';
import {useNavigation} from "@react-navigation/native"
const StoreForm = () => {
  const navigation = useNavigation();
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');

  const handleFormSubmit = async() => {

    try{
        if(!itemName || !price){
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        } 
       Alert.alert('No error',"Successfully submitted")
        
        await addDoc(collection(firestore,'store'),{
            itemName: itemName,
            price: parseFloat(price)
            
        });
        setItemName('');
        setPrice('');

    }catch(error){
      Alert.alert("Oops! something went wrong")

    }
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Store Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={itemName}
        onChangeText={text => setItemName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={text => setPrice(text)}
      />
      <Button title="Submit" onPress={()=>{
        handleFormSubmit();
        navigation.navigate("StoreFinances");
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default StoreForm;
