import { StyleSheet, Text, View, Button } from "react-native";
import {useEffect, useState, useRef} from "react";
import { auth, db } from "../../firebase";
import { collection, getDocs, setDoc, doc} from 'firebase/firestore/lite';
import useUpdateEffect from "../hooks/useUpdateEffect";

import {Monster} from "../constants/MonsterInterface";

//TODO: temporary imported components
import MonsterCard from "../components/MonsterCard";
import AsmaronLevel1 from "../components/svgs/monsters/AsmaronLevel1"

type Props = {
    navigation: any;
};

function arrayIsEmpty(array: Array<any> | null) {
    if (!Array.isArray(array)) {
        return false;
    }
    if (array.length == 0) {
        return true;
    }
    return false;
}

const Home = (props: Props) => {
    const [myMonsterList, setMyMonsterList] = useState<Monster[] | null>(null);
    
    useEffect(() => {
        getDatabase();
        getUsersMonsters();
    }, []);

    useUpdateEffect(() => {
        if (arrayIsEmpty(myMonsterList)) {
            console.log("empty");
        }
    }, [myMonsterList]);

    const getDatabase = async () => {
        try {
            const monstersCol = collection(db, 'Monsters');
            const monsterSnapshot = await getDocs(monstersCol);
            const monsterList: any = monsterSnapshot.docs.map(doc => doc.data());
            const myMonsterList: Monster[] = monsterList.map((monster: Monster) => {
                return monster;
            });

            setMyMonsterList(myMonsterList)
        } catch (error) {
            console.log(error);
        }
    }

    const signOut = () => {
        auth.signOut().then(() => {
            props.navigation.replace("Login");
        });
    }
    //TODO: clean up this function
    const addMonster = async () => {
        try {
            const UsersMonsters = collection(db, 'UsersMonsters');
            await setDoc(doc(UsersMonsters, auth.currentUser?.uid), {
                name: "Asmaron",
                type: "wind",
                maxLevel: 20,
                health: 30,
                criticalStrike: 5,
                attackDamage: 25,
                abilityPower: 30,
            });
        } catch (error) {
            console.log(error);
        }
    }

    const getUsersMonsters = async () => {
        try {
            const UsersMonsters = collection(db, `${auth.currentUser?.uid}`);
            const monsterSnapshot = await getDocs(UsersMonsters);
            const monsterList: any = monsterSnapshot.docs.map(doc => doc.data());
            const myMonsterList: Monster[] = monsterList.map((monster: Monster) => {
                return monster;
            });

            setMyMonsterList(myMonsterList)
        } catch (error) {
            console.log(error);
        }
    }

    
    

    return (
        <View>
            <Text>Email: {auth.currentUser?.email}</Text>
            <Button title="Sign Out" onPress={signOut} />
            <Text></Text>
            <Button title="Start a game" onPress={
                () => props.navigation.navigate("Map")
            } />
            
            <Button
                title="Go to Arena"
                onPress={() => props.navigation.navigate("Arena")}
            />
            <MonsterCard>
                <AsmaronLevel1 />
            </MonsterCard>
            {/* {myMonsterList && myMonsterList.map((monster: Monster) => (
                <View key={monster.name} style={styles.monster}>
                    <Text style={styles.monsterText}>{monster.name}</Text>
                    <Text style={styles.monsterText}>{monster.type}</Text>
                    <Text style={styles.monsterText}>{monster.level}</Text>
                    <Text style={styles.monsterText}>{monster.health}</Text>
                    <Text style={styles.monsterText}>{monster.criticalStrike}</Text>
                    <Text style={styles.monsterText}>{monster.attackDamage}</Text>
                    <Text style={styles.monsterText}>{monster.abilityPower}</Text>
                </View>
            ))} */}
            
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    monster: {
        backgroundColor: "rgba(25,100,50,0.5)",
        margin: 10,
        padding: 10,
    },
    monsterText: {
        color: "white",
    }

    
});
