import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Image
} from 'react-native'

import { Home } from '../screens'
import { COLORS, icons } from '../constants'


const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style:{
        height: "10%",
        backgroundColor: COLORS.black
    }
}

const Tabs = () => {
    return (
        <Tab.Navigator 
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({focused }) => {
                    const tintColor = focused ? COLORS.white : COLORS.gray;

                    switch(route.name) {
                        case 'Home':
                            return(
                                <Image 
                                 source={icons.dashboard}
                                 resizeMode='contain'
                                 style={{
                                     tintColor: tintColor,
                                     width: 25,
                                     height: 25,
                                 }}
                                />
                            ) 
                            case 'Search':
                                return(
                                    <Image 
                                     source={icons.search}
                                     resizeMode='contain'
                                     style={{
                                         tintColor: tintColor,
                                         width: 25,
                                         height: 25,
                                     }}
                                    />
                            ) 
                            case 'Notifications':
                            return(
                                <Image 
                                 source={icons.notification}
                                 resizeMode='contain'
                                 style={{
                                     tintColor: tintColor,
                                     width: 25,
                                     height: 25,
                                 }}
                                />
                            ) 
                            case 'Settings':
                            return(
                                <Image 
                                 source={icons.menu}
                                 resizeMode='contain'
                                 style={{
                                     tintColor: tintColor,
                                     width: 25,
                                     height: 25,
                                 }}
                                />
                            ) 
                    }
                }
            })}
        >
            <Tab.Screen name= "Home" component={Home}/>
            <Tab.Screen name= "Search" component={Home}/>
            <Tab.Screen name= "Notifications" component={Home}/>
            <Tab.Screen name= "Settings" component={Home}/>
        </Tab.Navigator>
    )
}

export default Tabs;