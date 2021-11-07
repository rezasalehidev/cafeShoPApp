import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "../constants";
import HeaderBar from "./../components/HeaderBar";
import { connect } from "react-redux";

const Home = ({ navigation, appTheme }) => {
    return (
        <View style={styles.container}>
            <HeaderBar />
            <View style={[styles.Home, { backgroundColor: appTheme.backgroundColor }]}>
                <Text>salam</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    Home: {
        flex: 1,
        width: "100%",
        height: "100%",
        marginTop: 80,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
});

function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
        error: state.appTheme,
    };
}

function mapDistpatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDistpatchToProps)(Home);
