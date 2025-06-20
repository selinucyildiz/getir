import React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Entypo } from '@expo/vector-icons';
import HomeNavigator from "./HomeNavigator";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()
function RootNavigator() {

    const CustomTabBarButton = ({children}) => {
        return (
            <TouchableOpacity


                style={{
                    width:55,
                    height:55,
                    backgroundColor: "#5c3ebc",
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius:50,
                    marginTop: -8

                }}

                >
                <MaterialCommunityIcons name="dots-grid" size={34} color="#ffd00c" />

            </TouchableOpacity>
        )
    }

    return(
        <Tab.Navigator
            initialRouteName = "Homepage"

            screenOptions = {{


                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#5C3EBC",
                tabBarInactiveTintColor: "#959595",
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                },
            }}
        >

            <Tab.Screen

                name = "Homepage"
                component = {HomeNavigator}
                options = {{
                    tabBarIcon: ({color}) => (
                        <Entypo name="home" size={24} color={color} />
                    )
                }}

            />

            <Tab.Screen

                name = "Search"
                component = {HomeNavigator}
                options = {{
                    tabBarIcon: ({color}) => (
                        <Ionicons name="search" size={24} color={color} />
                    )
                }}

            />

            <Tab.Screen

                name = "List"
                component = {HomeNavigator}
                options = {{
                    tabBarButton: (props) => <CustomTabBarButton {...props} />
                        
                    
                }}

/>

            <Tab.Screen

                name = "Profile"
                component = {HomeNavigator}
                options = {{
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="user" size={24} color={color} />
                    )
                }}

            />

            <Tab.Screen

                name = "Gifts"
                component = {HomeNavigator}
                options = {{
                    tabBarIcon: ({color}) => (
                        <AntDesign name="gift" size={24} color={color} />
                    )
                }}

            />


        </Tab.Navigator>
    )
}


export default RootNavigator