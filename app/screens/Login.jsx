import React, { useState } from 'react';
import { View, TextInput, Button, ActivityIndicator, StyleSheet,Text } from 'react-native';
import { auth } from '../config/Firebase';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            navigation.navigate('MainTabNavigator'); 
        } catch(error) {
            console.log(error);
            alert("Sign In Failed");
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            navigation.navigate('MainTabNavigator'); // Navigate to the Home screen after signing up
        } catch(error) {
            console.log(error);
            alert("Sign Up Failed");
        } finally {
            setLoading(false);
        }
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style = {styles.heading}>Welcome to ByteBiz</Text>
            </View>
            <TextInput
                value={email}
                style={styles.input}
                placeholder="Email"
                autoCapitalize='none'
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                value={password}
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            {loading ? <ActivityIndicator size='large' color='#0000ff' />
            :
            <>
            <View style = {styles.buttonSpacing}>
                <Button 
                    onPress={signIn} // Use signIn function directly as onPress handler
                    title='Login'
                />
                <Button 
                    onPress={signUp} // Use signUp function directly as onPress handler
                    title='Create Account'
                />
                </View>
            </>}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff'
    },
    buttonSpacing:{
        marginVertical: 10,
    },
    heading:{
        paddingBottom: 15,
        marginLeft: 55,
        fontSize: 20,
    }
});

export default Login;
