import { StyleSheet, Text, View } from "react-native";
import {useEffect, useState, useRef} from "react";

import MonsterCard from "./MonsterCard";
import {Monster, Stats} from "../constants/MonsterInterface";

import AsmaronLevel1 from "./svgs/monsters/AsmaronLevel1"
import AsmaronLevel10 from "./svgs/monsters/AsmaronLevel10"
import AsmaronLevel20 from "./svgs/monsters/AsmaronLevel20"

type Props = {
    monster: Monster | null;
    isChoice?: boolean;
    choice?: () => void;
    isNotInCard?: boolean;
};

const PickedMonster = (props: Props) => {
    const [pickedMonster, setPickedMonster] = useState<JSX.Element | null>(null);
    const [stats, setStats] = useState<Stats | null>(null);

    useEffect(() => {
        if (props.monster == null) return
        if (props.monster.name == "Asmaron") {
            if (props.monster.level <= 9) {
                setPickedMonster(<AsmaronLevel1 type={props.monster.type} />);
            } else if (props.monster.level <= 19) {
                setPickedMonster(<AsmaronLevel10 type={props.monster.type}/>);
            } else if (props.monster.level >= 20) {
                setPickedMonster(<AsmaronLevel20 type={props.monster.type} />);
            }
        }
        const stats: Stats ={
            health: props.monster.health,
            abilityPower: props.monster.abilityPower,
            attackDamage: props.monster.attackDamage,
            criticalStrike: props.monster.criticalStrike,
            type: props.monster.type,
        };
        setStats(stats);
    }, []);

    if (!props.isNotInCard) {
        return (
            <MonsterCard stats={stats} isChoice={props.isChoice} choice={props.choice}>
                {pickedMonster}
            </MonsterCard>
        );  
    }
    else {
        return (
            <View>
                {pickedMonster}
            </View>
        );
    }
};

export default PickedMonster;

const styles = StyleSheet.create({});
