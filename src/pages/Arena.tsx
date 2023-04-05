import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import AbilityButton from "../components/AbilityButton";
import {useState, useEffect, useRef,} from "react";
import Timer from "../components/Timer";

import Platform from "../components/svgs/Platform";
import PickedMonster from "../components/PickedMonster";
import HealthBar from "../components/HealthBar";


type Props = {
    navigation: any;
    route: any;
};

type turn = "ally" | "enemy";

function waitFor(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function chooseRandomAbility() {
    return Math.floor(Math.random() * 4);
}
function chooseWhoStarts() {
    return Math.floor(Math.random() * 2);
}

const Arena = (props: Props) => {
    const monsters = props.route.params.monsters;
    const [turn, setTurn] = useState<turn>("ally");
    const [duration, setDuration] = useState<number>(1000);
    const [timerReset, setTimerReset] = useState<boolean>(false);
    
    monsters.currentHealth = monsters.health;

    useEffect(() => {
        if (turn == "ally") {
            waitFor(duration).then(() => {
                let randomAbility = chooseRandomAbility();
                abilities[randomAbility].ability();
                setTimerReset(true);
                setTurn("enemy");
                setDuration(5000);
                console.log("Enemy Turn");
            });
        }
        if (turn == "enemy") {
            waitFor(2000).then(() => {
                let randomAbility = chooseRandomAbility();
                abilities[randomAbility].ability();
                setTurn("ally");
                console.log("Ally Turn");
            }
        );}
    }, [turn]);//TODO: Add turn to useEffect

    const abilities = [
        {
            name: `${monsters[0].type.toUpperCase()} Attack`,
            type: "attack",
            ability: () => console.log("Fire Attack and Damage"),
        },
        {
            name: "Melee Attack",
            type: "attack",
            ability: () => console.log("Melee Attack"),
        },
        {
            name: "Defense",
            type: "defense",
            ability: () => console.log("Defense"),
        },
        {
            name: "Heal",
            type: "heal",
            ability: () => console.log("Heal"),
        },
    ];

    return (
        <View style={styles.container}>
            {turn == "ally" && 
                <Timer duration={duration} 
                    isExecuting={timerReset}
                />
            }

            <Platform type='enemy'>
                <PickedMonster 
                    monster={monsters[0]}
                    isNotInCard={true}
                />
                <HealthBar receivedValue={monsters[0].currentHealth} maxHealth={monsters[0].health}/>
            </Platform>
            
            <Platform type='ally'>
                <PickedMonster
                    monster={monsters[1]}
                    isNotInCard={true}
                />
                <HealthBar receivedValue={monsters[1].currentHealth} maxHealth={monsters[1].health}/>
            </Platform>
            <FlatList
                style={styles.abilities}
                data={abilities}
                renderItem={({ item }) => <AbilityButton abilityName={item.name} abilityType={item.type} ability={item.ability} available={turn == 'ally'} />}
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
        backgroundColor: "rgba(0,200,50,0.5)",
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
