import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { colors } from '../global/styles';
import { Icon } from 'react-native-elements';
import Home from '../screens/Home';
import Category from '../screens/Category';
import Orders from '../screens/Orders';
import Profile from '../screens/Profile';


const BottomTabs = createMaterialBottomTabNavigator();
export default function Tabs() {
    return (
        <BottomTabs.Navigator
            initialRouteName="Home"
            barStyle={{ backgroundColor: '#ffff' }}
            activeColor= {colors.green}
            inactiveColor='black'
        >
            <BottomTabs.Screen
                name="Home"
                component={Home}
                options={
                    {
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='home'
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />

            <BottomTabs.Screen
                name='Category'
                component={Category}
                options={
                    {
                        tabBarLabel: "Category",
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='grid-view'
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />

            <BottomTabs.Screen
                name="Orders"
                component={Orders}
                options={
                    {
                        tabBarLabel: "Orders",
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='local-mall'
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />

            <BottomTabs.Screen
                name="Profile"
                component={Profile}
                options={
                    {
                        tabBarLabel: "Profile",
                        tabBarIcon: ({ color, size }) => (
                            <Icon
                                name='person'
                                type='material'
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />
            
        </BottomTabs.Navigator>
    )
}