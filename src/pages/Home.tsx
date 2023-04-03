import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { useEffect, useState, useRef } from "react";
import { auth, db } from "../../firebase";
import {
    collection,
    getDocs,
    setDoc,
    doc,
    addDoc,
} from "firebase/firestore/lite";
import useUpdateEffect from "../hooks/useUpdateEffect";

import { Monster } from "../constants/MonsterInterface";
import PickedMonster from "../components/PickedMonster";
//TODO: temporary imported components
import MonsterCard from "../components/MonsterCard";
import AsmaronLevel1 from "../components/svgs/monsters/AsmaronLevel1";

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
    const [isChoiceMade, setIsChoiceMade] = useState<boolean>(false);

    useEffect(() => {
        getDatabase();
        getUsersMonsters();
    }, []);

    useUpdateEffect(() => {
        if (arrayIsEmpty(myMonsterList)) {
            setIsChoiceMade(true);
        }
    }, [myMonsterList]);

    const getDatabase = async () => {
        try {
            const monstersCol = collection(db, "Monsters");
            const monsterSnapshot = await getDocs(monstersCol);
            const monsterList: any = monsterSnapshot.docs.map((doc) =>
                doc.data()
            );
            const myMonsterList: Monster[] = monsterList.map(
                (monster: Monster) => {
                    return monster;
                }
            );

            setMyMonsterList(myMonsterList);
        } catch (error) {
            console.log(error);
        }
    };

    const signOut = () => {
        auth.signOut().then(() => {
            props.navigation.replace("Login");
        });
    };

    const getUsersMonsters = async () => {
        try {
            const UsersMonsters = collection(db,'UsersMonsters');
            // console.log(UsersMonsters);
            
            const monsterSnapshot = await getDocs(UsersMonsters);
            console.log(monsterSnapshot);
            
            const monsterList: any = monsterSnapshot.docs.map((doc) =>
                doc.data()
            );
            const myMonsterList: Monster[] = monsterList.map(
                (monster: Monster) => {
                    return monster;
                }
            );

            setMyMonsterList(myMonsterList);
        } catch (error) {
            console.log("gst user monsters error: ", error);
        }
    };
    const choice = async (monster: Monster) => {
        try {
            const uid = auth.currentUser?.uid;
            if (!uid) return;
            const UsersMonsters = collection(db, "UsersMonsters", uid, "Monsters");
            await addDoc(UsersMonsters, monster);
            setIsChoiceMade(true);
            console.log("choice made");
        } catch (error) {
            console.log(error);
        }
    };

    //TODO: clean up this function
    const addMonster = async () => {
        try {
            const UsersMonsters = collection(db, "UsersMonsters");
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
    };

    return (
        <View>
            <Text>Email: {auth.currentUser?.email}</Text>
            <Button title="Sign Out" onPress={signOut} />
            <Text></Text>
            <Button
                title="Start a game"
                onPress={() => props.navigation.navigate("Map")}
            />

            <Button
                title="Go to Arena"
                onPress={() => props.navigation.navigate("Arena")}
            />
            <FlatList
                data={myMonsterList}
                renderItem={({ item }) => (
                    <PickedMonster
                        monster={item}
                        isChoice={isChoiceMade}
                        choice={() => {
                            choice(item);
                        }}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                style={{ marginBottom: 200 }}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
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
    },
});
