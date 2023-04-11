import { StyleSheet, View } from "react-native";
import Svg, { Rect, Ellipse } from "react-native-svg";
import {FC} from "react";

type Props = {
    type: "ally" | "enemy";
    children: any;
};

export default function SvgComponent<FC>(props: Props) {
    return (
        <View  style={props.type == 'enemy' ? styles.platformEnemy : styles.platformAlly}>
            <>
            {props.children}
                <Svg
                    width={200}
                    height={110}
                    viewBox="0 0 1000 590"
                    fill="none"
                    //   xmlns="http://www.w3.org/2000/svg"
                    {...props}
                    >
                    <Rect y={226} width={1000} height={364} rx={64} fill="#D35E5E" />
                    <Ellipse cx={500} cy={247} rx={500} ry={247} fill="#F85353" />
                </Svg>
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    platformAlly: {
        position: "absolute",
        bottom: 200,
        left: 0,
    },
    platformEnemy: {
        position: "absolute",
        top: 150,
        right: 0,
    },

});
