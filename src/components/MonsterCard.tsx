import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { Stats } from "../constants/MonsterInterface";

type Props = {
    children?: React.ReactNode;
    stats?: Stats | null;
    isChoice?: boolean;
    choice?: () => void;
};

const MonsterCard = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.monsterView}>{props.children}</View>
            <View style={styles.statsView}>
                <Text>Stats</Text>
                <Text>Health: {props.stats?.health}</Text>
                <Text>Ability Power: {props.stats?.abilityPower}</Text>
                <Text>Attack Damage: {props.stats?.attackDamage}</Text>
                <Text>Critical Strike: {props.stats?.criticalStrike}</Text>
                <Text>Type: {props.stats?.type}</Text>
            </View>
            {props.isChoice && (
                <TouchableOpacity
                    onPress={props.choice ? props.choice : () => {console.log( "No choice function" )}}
                    style={styles.button}
                >
                    <Text>Choose</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default MonsterCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,0,0,0.5)",
        margin: 10,
        padding: 10,
    },
    monsterView: {
        backgroundColor: "rgba(25,100,50,0.5)",
        margin: 10,
        padding: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    statsView: {
        backgroundColor: "rgba(25,100,50,0.5)",
        margin: 10,
        padding: 10,
    },
    button: {
        backgroundColor: "rgba(25,100,50,0.5)",
        margin: 10,
        padding: 10,
    },
});
