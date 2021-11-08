import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, icons, FONTS } from "./../constants";

const HeaderLocation = ({ appTheme, navigation }) => {
    return (
        <View style={[styles.HeaderLocation, { backgroundColor: appTheme.locationtheme }]}>
            <View style={styles.ViewIcon}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.leftArrow} style={styles.IconLeftArrow} />
                </TouchableOpacity>
            </View>
            <View style={styles.VeiwLocation}>
                <Text style={{ color: appTheme.textColor, ...FONTS.h3 }}>Location</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    HeaderLocation: {
        height: 80,
        backgroundColor: COLORS.lightGreen,
        flexDirection: "row",
        alignItems: "center",
    },
    ViewIcon: {
        flex: 1,
    },
    IconLeftArrow: {
        width: 20,
        height: 20,
        color: COLORS.white,
        marginLeft: 10,
        marginBottom: 25,
    },
    VeiwLocation: {
        flex: 1,
    },
});

export default HeaderLocation;
