import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import Tabs from "./BottomTabs";
import Home from "../screens/Home";
import Category from "../screens/Category";
import Profile from "../screens/Profile";
import Orders from '../screens/Orders'
import Signup from "../screens/Signup";
import Verify from "../screens/Verify";
import Products from "../screens/Products";

const Auth = createStackNavigator();

export function AuthStack() {
    return (
        <Auth.Navigator>
            <Auth.Screen
                name="Tabs"
                component={Tabs}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            ></Auth.Screen>
            <Auth.Screen
                name="Signup"
                component={Signup}
            />
            <Auth.Screen
                name="Verify"
                component={Verify}
            />
            
            <Auth.Screen
                name="Products"
                component={Products}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

        </Auth.Navigator>
    )
}