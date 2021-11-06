import React from "react";
import { Image, Platform, View, Text } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import { Home, Rewards } from "../screens";
import { COLORS, SIZES, icons } from "../constants";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    elevation: 0,
                    backgroundColor: "transparent",
                    borderTopColor: "transparent",
                    height: Platform.OS == "android" ? 60 : 80,
                    borderTopLeftRadius: SIZES.radius * 2,
                    borderTopRightRadius: SIZES.radius * 2,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ backgroundColor: COLORS.gray3, height: 60, width: "100%", alignItems: "center", justifyContent: "center", padding: 7, borderTopLeftRadius: 20 }}>
                            <Image
                                source={icons.home}
                                resizeMode="contain"
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: focused ? COLORS.white : COLORS.black,
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Rewards"
                component={Rewards}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ backgroundColor: COLORS.gray3, height: "100%", width: "100%", alignItems: "center", justifyContent: "center", marginRight: 16 }}>
                            <Image
                                source={icons.bubbleTea}
                                resizeMode="contain"
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: focused ? COLORS.white : COLORS.black,
                                }}
                            />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="AddOrder"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={icons.add}
                                resizeMode="contain"
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: COLORS.gray,
                                    position: "absolute",
                                    top: -20,
                                    left: 25,
                                    tintColor: focused ? COLORS.yellow : COLORS.black,
                                }}
                            />
                            <Svg xmlns="http://www.w3.org/2000/svg" width={90} height={60} viewBox="0 0 90 61">
                                <Path
                                    d="M0 0a38.742 38.742 0 0113 7c5.313 4.4 6.7 8.593 12 13 5.993 4.98 12.987 8 20 8s14.007-3.02 20-8c5.3-4.408 6.687-8.6 12-13a38.742 38.742 0 0113-7v61H0V0z"
                                    fill="#4d4d4d"
                                    fillRule="evenodd"
                                />
                            </Svg>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Favourite"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ backgroundColor: COLORS.gray3, height: "100%", width: "100%", alignItems: "center", justifyContent: "center", marginLeft: 16 }}>
                            <Image
                                source={icons.heart}
                                resizeMode="contain"
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: focused ? COLORS.white : COLORS.black,
                                }}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ backgroundColor: COLORS.gray3, height: "100%", width: "100%", alignItems: "center", justifyContent: "center", borderTopRightRadius: 20 }}>
                            <Image
                                source={icons.profile}
                                resizeMode="contain"
                                style={{
                                    width: 35,
                                    height: 35,
                                    tintColor: focused ? COLORS.white : COLORS.black,
                                }}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
