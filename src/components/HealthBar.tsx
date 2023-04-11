import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import Svg, {Rect, G} from "react-native-svg";

import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";

type Props = {
    receivedValue: number;
    maxHealth: number;
    gameover: boolean;
};

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const HealthBar = (props: Props) => {
    const sherdValue = useSharedValue(100);
    
    useEffect(() => {
        sherdValue.value = withTiming((props.receivedValue), {duration: 1000});
    }, [ props.receivedValue]);

    const animatedProps = useAnimatedProps(() => {
        return {
            width: sherdValue.value,
        };
    });

    return (
        <Svg style={styles.svg}>
            <Rect x="0" y="0" width={100} height="10" fill="grey" />
            <G>
                <AnimatedRect x="0" y="0" height="10" fill="green" 
                    animatedProps={animatedProps}
                />
                {/* <AnimatedRect x="10" y="0" width="90" height="10" fill="yellow" /> */}
            </G>
        </Svg>
    );
};

export default HealthBar;

const styles = StyleSheet.create({
    svg: {
        position: "absolute",
        marginHorizontal: 30,
        paddingBottom: 0,
        
    }
});
