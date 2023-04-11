import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Monster } from "../constants/MonsterInterface";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Map from "../pages/Map";
import Arena from "../pages/Arena";

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Map: undefined;
    Arena: { monsters: Monster[] };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const index: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Map" component={Map} />
                <Stack.Screen name="Arena" component={Arena} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default index;
export type { RootStackParamList };