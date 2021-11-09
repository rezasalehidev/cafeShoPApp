import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, icons } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { toggleTheme } from "./../store/themeAction";

const HeaderBar = ({ appTheme, toggleTheme }) => {
    const togglethemeHandler = () => {
        if (appTheme.name == "light") {
            toggleTheme("dark");
        } else {
            toggleTheme("light");
        }
    };

    return (
        <View style={styles.Header}>
            <TouchableOpacity style={styles.Btnicon} onPress={() => togglethemeHandler()}>
                <View style={{ width: 35, height: 35, justifyContent: "center" }}>
                    <Image source={icons.sunny} style={{ width: 25, height: 25, ...(appTheme.name === "light" ? styles.selectlight : { tintColor: COLORS.white }) }} />
                </View>
                <View style={{ width: 35, height: 35, justifyContent: "center" }}>
                    <Image source={icons.night} style={{ width: 25, height: 25, ...(appTheme.name === "dark" ? styles.selectnight : { tintColor: COLORS.white }) }} />
                </View>
            </TouchableOpacity>
            <View style={styles.textHeader}>
                <View style={{ backgroundColor: COLORS.white, alignItems: "center", marginBottom: 5, borderRadius: 7 }}>
                    <Text style={{ color: COLORS.black }}>رضا</Text>
                </View>
                <Text style={{ color: COLORS.white }}>خوش آمدید</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Header: {
        height: 120,
        backgroundColor: COLORS.purple,
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textHeader: {
        marginRight: 10,
        marginTop: 10,
        color: COLORS.white,
    },
    Btnicon: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: COLORS.white,
        padding: 2,
        tintColor: COLORS.white,
        backgroundColor: COLORS.lightPurple,
    },
    selectnight: {
        tintColor: COLORS.black,
    },
    selectlight: {
        tintColor: COLORS.lightYellow,
    },
});

function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.appTheme,
    };
}

function mapDistpatchToProps(dispatch) {
    return {
        toggleTheme: (themetype) => {
            return dispatch(toggleTheme(themetype));
        },
    };
}

export default connect(mapStateToProps, mapDistpatchToProps)(HeaderBar);
