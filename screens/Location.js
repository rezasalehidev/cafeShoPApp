import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import HeaderLocation from "./../components/HeaderLocation";
import { connect } from "react-redux";
import { SIZES, COLORS } from "../constants";
import TabLocation from "../components/TabLocation";

const Location = ({ navigation, appTheme }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <View style={styles.container}>
            {/* Header */}
            <HeaderLocation appTheme={appTheme} navigation={navigation} />

            {/* Detials */}
            <View style={[styles.DetialsContainer, { backgroundColor: appTheme.backgroundColor }]}>
                {/* TabLocation Components */}
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <TabLocation
                        containerStyle={{
                            width: 80,
                        }}
                        label="Nearby"
                        onPress={() => setSelectedTab(0)}
                        selected={selectedTab == 0 ? true : false}
                    />
                    <TabLocation
                        containerStyle={{
                            width: 100,
                        }}
                        label="previous"
                        onPress={() => setSelectedTab(1)}
                        selected={selectedTab == 1 ? true : false}
                    />
                    <TabLocation
                        containerStyle={{
                            width: 100,
                        }}
                        label="Favorite"
                        onPress={() => setSelectedTab(2)}
                        selected={selectedTab == 2 ? true : false}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    DetialsContainer: {
        flex: 1,
        borderTopLeftRadius: SIZES.radius * 2,
        borderTopRightRadius: SIZES.radius * 2,
        marginTop: -20,
        padding: SIZES.padding,
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

export default connect(mapStateToProps, mapDistpatchToProps)(Location);
