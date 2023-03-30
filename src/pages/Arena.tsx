import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import AbilityButton from "../components/AbilityButton";
import React from "react";

import Platform from "../components/svgs/Platform";
import AsmaronLevel1 from "../components/svgs/monsters/AsmaronLevel1";
import AsmaronLevel10 from "../components/svgs/monsters/AsmaronLevel10";


type Props = {};

const abilities = [
    {
        name: "Fire Attack",
        type: "attack",
    },
    {
        name: "Melee Attack",
        type: "attack",
    },
    {
        name: "Defense",
        type: "defense",
    },
    {
        name: "Heal",
        type: "heal",
    },
];
const Arena = (props: Props) => {

    

    return (
        <View style={styles.container}>
            <Platform type='enemy'>
                <AsmaronLevel10/>
            </Platform>
            
            <Platform type='ally'>
                <AsmaronLevel1 />
            </Platform>
            <FlatList
                style={styles.abilities}
                data={abilities}
                renderItem={({ item }) => <AbilityButton abilityName={item.name} abilityType={item.type} />}
                keyExtractor={item => item.name}
                numColumns={2}
            />
        </View>
    );
};

export default Arena;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0200,50,0.5)",
    },
    abilities: {
        position: "absolute",
        flex: .3,
        bottom: 0,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingBottom: 30,
    },
});
