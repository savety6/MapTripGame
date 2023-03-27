import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { auth } from "../../firebase";

type Props = {
    navigation: any;
};

const Home = (props: Props) => {

    const signOut = () => {
        auth.signOut().then(() => {
            props.navigation.replace("Login");
        });
    }

    return (
        <View>
            <Text>Email: {auth.currentUser?.email}</Text>
            <Button title="Sign Out" onPress={signOut} />
            <Text></Text>
            <Button title="Start a game" onPress={
                () => props.navigation.navigate("Map")
            } />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});
