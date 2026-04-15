import React, { JSX, useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'

export default function Register() {

    const registerUsers = () => {
        try {

        } catch (error) {
            console.error('error in registerUser:' + error);
        }
    }
    const reset = () => {
        try {

        } catch (error) {
            console.error('error in registerUser:' + error);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.brandName}>Signup Here</Text>
            <TextInput
                style={styles.TextInput}
                placeholder="Full Name"
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Email"
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Mobile Number"
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Password"
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Confirm Password"
            />

            <TouchableOpacity
                onPress={reset}
                style={styles.Button}
            >
                <Text style={styles.btnText}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={reset}
                style={styles.Button}
            >
                <Text style={styles.btnText}>reset</Text>
            </TouchableOpacity>

            <Text>Already have an account?</Text>
            <TouchableOpacity
                onPress={reset}
                style={styles.btnLogin}
            >
                <Text style={styles.btnText}>Login</Text>
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
        margin: 1
    },
    btnContainer: {
        flexDirection: 'row',
        height: '5%',
        width: '60%',
        marginVertical: 10,
        backgroundColor: '#100e0e',
        padding: 5
    },
    TextInput: {
        borderColor: '#4b9a1b',
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'left',
        color: '#343534',
        height: '5%',
        width: '90%',
        paddingLeft: 10,
        margin: 10
    },
    Button: {
        borderRadius: 5,
        backgroundColor: '#4b9a1b',
        height: '5%',
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 1,
        margin: 10
    },
    btnLogin: {
        borderRadius: 10,
        backgroundColor: '#4b9a1b',
        height: '5%',
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1
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