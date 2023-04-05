import { StyleSheet, Text, Dimensions, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";

type Props = {
    abilityName: string;
    abilityType: string;
    ability: () => void;
    available: boolean;
};

interface ability{
    type: "attack" | "defense" | "heal";
}

const { width, height } = Dimensions.get("window");

const AbilityButton = (props: Props) => {

    let typeStyle: any = props.abilityType == "attack" ? styles.Attack : props.abilityType == "defense" ? styles.Defense : styles.Heal;

    return (
        <TouchableOpacity 
            style={[styles.ability, typeStyle, {opacity: props.available ? 1 : 0.5}]}
            onPress={props.ability}
            disabled={!props.available}
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
