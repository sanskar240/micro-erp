import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VendorForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {

    //Firebase POST

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Vendor Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter vendor name"
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
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
