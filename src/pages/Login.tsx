import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import {useState, useEffect, } from "react";
import { auth } from "../../firebase";

type Props = {};

const Login = (props: Props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
        try {    
            const credentials = await auth.
        (email, password)
            console.log(credentials);
            const user = credentials.user;
            console.log(user);
        } catch (error) {
            console.log(error);
            alert(error);
        }
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <Text>Login</Text>
            <View
                style={styles.inputContainer} 
            >
                <TextInput
                    placeholder="Email"
                    autoFocus
                    value={ email }
                    onChangeText={text => { setEmail(text) }}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={ password }
                    onChangeText={text => { setPassword(text) }}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View
                style={styles.buttonContainer}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{}}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View
                style={styles.buttonContainer}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{}}
                >
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: 300,
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        marginBottom: 10,
    },
    buttonContainer: {
        marginTop: 10,
    },
    button: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
});
