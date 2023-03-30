import { StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import React from "react";

type Props = {
    abilityName: string;
    abilityType: string;
};

interface ability{
    type: "attack" | "defense" | "heal";
}

const { width, height } = Dimensions.get("window");

const AbilityButton = (props: Props) => {

    let typeStyle: any = props.abilityType == "attack" ? styles.Attack : props.abilityType == "defense" ? styles.Defense : styles.Heal;



    
    return (
        <TouchableOpacity 
            style={[styles.ability, typeStyle]}
            onPress={() => console.log(props.abilityName)}
            >
            <Text>{props.abilityName}</Text>
        </TouchableOpacity>
    );
};

export default AbilityButton;

const styles = StyleSheet.create({
    ability: {
        width: width / 2 - 20,
        margin: 10,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    Attack: {
        backgroundColor: "red",
    },
    Defense: {
        backgroundColor: "blue",
    },
    Heal: {
        backgroundColor: "green",
    },
});
