import { StyleSheet, Text, View, Button } from "react-native";
import {useEffect, useState, useRef} from "react";
import { auth, db } from "../../firebase";
import { collection, getDocs } from 'firebase/firestore/lite';

type Props = {
    navigation: any;
};

interface Monster {
    name: string;
    type: string;
    level: number;
    health: number;
    criticalStrike: number;
    attackDamage: number;
    abilityPower: number;
}
interface MonsterList {
    monsterList: Monster[];
}

const Home = (props: Props) => {
    const [myMonsterList, setMyMonsterList] = useState<MonsterList | null>(null);
    useEffect(() => {
        getDatabase();
    }, []);

    const getDatabase = async () => {
        try {
            const monstersCol = collection(db, 'Monsters');
            const monsterSnapshot = await getDocs(monstersCol);
            const monsterList: any = monsterSnapshot.docs.map(doc => doc.data());
            console.log(monsterList, typeof monsterList);
            const myMonsterList: MonsterList = monsterList.map((monster: Monster) => {
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

    return (
        <View>
            <Text>Email: {auth.currentUser?.email}</Text>
            <Button title="Sign Out" onPress={signOut} />
            <Text></Text>
            <Button title="Start a game" onPress={
                () => props.navigation.navigate("Map")
            } />
            {myMonsterList && myMonsterList.map((monster: Monster) => (
                <View key={monster.name} style={styles.monster}>
                    <Text style={styles.monsterText}>{monster.name}</Text>
                    <Text style={styles.monsterText}>{monster.type}</Text>
                    <Text style={styles.monsterText}>{monster.level}</Text>
                    <Text style={styles.monsterText}>{monster.health}</Text>
                    <Text style={styles.monsterText}>{monster.criticalStrike}</Text>
                    <Text style={styles.monsterText}>{monster.attackDamage}</Text>
                    <Text style={styles.monsterText}>{monster.abilityPower}</Text>
                </View>
            ))}
            <Button
                title="Go to Arena"
                onPress={() => props.navigation.navigate("Arena")}
            />
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
