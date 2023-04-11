import { StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import AbilityButton from "../components/AbilityButton";
import {useState, useEffect, useRef,} from "react";

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from "../navigation/index";

import Timer from "../components/Timer";

import Platform from "../components/svgs/Platform";
import PickedMonster from "../components/PickedMonster";
import HealthBar from "../components/HealthBar";

type MyScreenNavigationProp = NativeStackNavigationProp<RootStackParamList,'Arena'>;
type MyScreenRouteProp = RouteProp<RootStackParamList, 'Arena'>;


type Props = {
    navigation: MyScreenNavigationProp;
    route: MyScreenRouteProp;
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

    const allyHealthRef = useRef(monsters[0].health).current
    const enemyHealthRef = useRef(30).current

    const [allyHealth, setAllyHealth] = useState<number>(monsters[0].health);
    const [enemyHealth, setEnemyHealth] = useState<number>(monsters[1].health);

    const [gameover, setGameover] = useState<boolean>(false)

    function changeHealth(){
        if (turn == "ally") {
            
        }else{

        }
    }
    //Main game loop
    useEffect(() => {
        if (turn == "ally") {
            waitFor(duration).then(() => {
                let randomAbility = chooseRandomAbility();
                abilities[randomAbility].ability();
                setTimerReset(true);
                setTurn("enemy");
                setDuration(5000);
                // console.log("Enemy Turn");
            });
        }
        if (turn == "enemy") {
            waitFor(2000).then(() => {
                let randomAbility = chooseRandomAbility();
                abilities[randomAbility].ability();
                setTurn("ally");
                // console.log("Ally Turn");
            }
        );}
    }, [turn]);

    const abilities = [
        {
            name: `${monsters[0].type.toUpperCase()} Attack`,
            type: "attack",
            ability: () => {
                let index = turn == "ally" ? 0 : 1;
                console.log(`${monsters[index].type.toUpperCase()} Attack`)
                turn == "enemy" ? 
                    setAllyHealth((prev) => {
                        console.log('====================================');
                        console.log('Ally Health: ', prev - monsters[1].abilityPower);
                        console.log('====================================');
                        return prev - monsters[1].abilityPower
                    }) 
                    :
                    setEnemyHealth((prev) => {
                        console.log('====================================');
                        console.log('Enemy Health: ', prev - monsters[0].abilityPower);
                        console.log('====================================');
                        return prev - monsters[0].abilityPower
                    })
            },
        },
        {
            name: "Melee Attack",
            type: "attack",
            ability: () => {
                let index = turn == "ally" ? 0 : 1;
                console.log(`${monsters[index].type.toUpperCase()} Attack`)
                turn == "enemy" ? 
                    setAllyHealth((prev) => prev - monsters[1].attackDamage) 
                    :
                    setEnemyHealth((prev) => prev - monsters[0].attackDamage)
            },
        },
        {
            name: "Defense",
            type: "defense",
            ability: () => {
                let index = turn == "ally" ? 0 : 1;
                console.log(`${monsters[index].type.toUpperCase()} Defense`)
                turn == "ally" ? 
                    setAllyHealth((prev) => prev + monsters[0].attackDamage) 
                    :
                    setEnemyHealth((prev) => prev + monsters[1].attackDamage)
            },
        },
        {
            name: "Heal",
            type: "heal",
            ability: () => {
                let index = turn == "ally" ? 0 : 1;
                console.log(`${monsters[index].type.toUpperCase()} Heal`)
                turn == "ally" ? 
                    setAllyHealth((prev) => prev + monsters[0].abilityPower) 
                    :
                    setEnemyHealth((prev) => prev + monsters[1].abilityPower)
            },
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
                    monster={monsters[1]}
                    isNotInCard={true}
                />
                <HealthBar gameover={gameover} receivedValue={enemyHealth} maxHealth={enemyHealthRef}/>
            </Platform>
            
            <Platform type='ally'>
                <PickedMonster
                    monster={monsters[0]}
                    isNotInCard={true}
                />
                <HealthBar gameover={gameover} receivedValue={allyHealth} maxHealth={allyHealthRef}/>
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
