import React, { JSX, useState, useEffect } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';

export default function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<LoginScreenNavigationProp>();

    type LoginScreenNavigationProp = NativeStackNavigationProp<
        RootStackParamList,
        'Login'
    >;
    

    const Login = () => {
        try {
            if (username === 'dipak' && password === 'admin@123') {
                navigation.navigate("Home");
                reset();
            } else {
                Alert.alert('Invalid Credentials');
            }
        } catch (error) {
            console.error(error)
        }
    }

    const reset = () => {
        try {
            setUserName('');
            setPassword('');
        } catch (error) {
            console.error(error)
        }
    }

    const forgotPassword = () => {
        Alert.alert('Comming Soon...')
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: '/Users/dipakjoshi/Documents/ReactNativeLearning/FreshStock/resources/playstore-icon.png' }}
                style={styles.logoImg}
            />
            <Text style={styles.labelText}>Enter Username</Text>
            <TextInput
                style={styles.TextInput}
                placeholder="Enter Username"
                value={username}
                onChangeText={setUserName}
            />
            <Text style={styles.labelText}>Enter Password</Text>
            <TextInput
                placeholder="Enter Password"
                secureTextEntry={true}
                style={styles.TextInput}
                value={password}
                onChangeText={setPassword}
            />

            <Text style={styles.text} onPress={forgotPassword}>Forgot Password?</Text>
            <TouchableOpacity
                onPress={Login}
                style={styles.Button}
            >
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <Text>Don't have account?</Text>
            <TouchableOpacity
                onPress={reset}
                style={styles.Button}
            >
                <Text style={styles.btnText}>Signup</Text>
            </TouchableOpacity>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 8,
        margin: 1,
    },
    TextInput: {
        borderColor: '#4b9a1b',
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'left',
        color: '#343534',
        height: '5%',
        width: '80%',
        paddingLeft: 10,
        margin: 10
    },
    Button: {
        borderRadius: 10,
        backgroundColor: '#4b9a1b',
        height: '5%',
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    btnText: {
        color: '#e7f5df',
        fontFamily: 'Times New Roman',
        fontStyle: 'italic',
        fontSize: 25
    },
    text: {
        color: '#bb1903',
        fontFamily: 'Times New Roman',
        fontStyle: 'italic',
        fontSize: 15,
        marginBottom: 20,
        paddingLeft: '50%'
    },
    logoImg: {
        margin: 40,
        height: '30%',
        width: '60%'
    },
    brandName: {
        color: '#4b9a1b',
        fontFamily: 'Times New Roman',
        fontStyle: 'italic',
        fontSize: 35,
    },
    labelText: {
        color: '#343534',
        fontFamily: 'Times New Roman',
        fontSize: 15,
        paddingRight: '50%'
    }
})