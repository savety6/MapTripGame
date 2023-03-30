import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Map from "../pages/Map";
import Arena from "../pages/Arena";

type Props = {};

const Stack = createNativeStackNavigator();

const index = (props: Props) => {
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
