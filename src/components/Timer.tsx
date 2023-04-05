import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Svg, { Circle } from "react-native-svg";
import Animated, { useAnimatedProps, useSharedValue, withTiming } from "react-native-reanimated";
import usePrevious from "../hooks/usePrevious";

type Props = {
    duration: number;
    isExecuting: boolean;
};

const { width, height } = Dimensions.get("window");
const CircleLength = 150;
const R = CircleLength / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Timer = (props: Props) => {
    const progress = useSharedValue(0)

    useEffect(() => {
        progress.value = withTiming( progress.value > 0 ? 0 : 1 , { duration: props.duration }, () => {
            console.log("Timer Done");
        })
    }, [props.duration])


    const animatedProps = useAnimatedProps(() => {
        return {
            strokeDashoffset: CircleLength * (1 - progress.value)
        }
    })

    return (
        <Svg
            style={styles.svg}
        >
            <Circle cx="50" cy="50" r={R} stroke="#303858" strokeWidth="10" fill="rgba(0,0,0,0)" />
            <AnimatedCircle cx="50" cy="50" r={R} stroke="#A6E1FA" strokeWidth="3" fill="rgba(0,0,0,0)"
                strokeDasharray={CircleLength}
                strokeDashoffset={CircleLength}
                animatedProps={animatedProps}
                strokeLinecap={"round"}
            />
        </Svg>
    );
};

export default Timer;

const styles = StyleSheet.create({
    svg: {
        position: "absolute",
        top: 0,
        left: 0,
        width: 100,
        height: 100,
        transform:[{rotate: "-90deg"}]
    }
});
