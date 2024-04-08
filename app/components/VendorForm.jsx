import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet ,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection } from '@firebase/firestore';
import { firestore } from '../config/Firebase';

const VendorForm = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async()=>{
    try{
        if(!name || !phone ){
            Alert.alert("Please enter all the fields");
        }
        Alert.alert("Successfully submitted");
       await addDoc(collection(firestore,'vendors'),{
        name:name,
        phone:parseInt(phone,10)
       });
       setName('');
       setPhone('');

    }catch(error){
        console.error("Error",error);
        Alert.alert("Oops someting went wrong");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Vendor Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter vendor name"
        value={name}
        onChangeText={text => setName(text)}
      />


      <Text style={styles.label}>Phone:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        value={phone}
        onChangeText={text => setPhone(text)}
        keyboardType="phone-pad"
      />

      <Button 
      onPress={()=>{
        handleSubmit();
        navigation.navigate('Vendors');
      }}
      title="Submit"
      
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default VendorForm;
