import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, Image } from "react-native";
import HeaderLocation from "./../components/HeaderLocation";
import { connect } from "react-redux";
import { SIZES, COLORS, icons } from "../constants";
import TabLocation from "../components/TabLocation";

const windowWidth = Dimensions.get("screen").width;

const Location = ({ navigation, appTheme }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [search, setSearch] = useState("");
    return (
        <View style={[styles.container, { backgroundColor: appTheme.backgroundColor }]}>
            {/* Header */}
            <HeaderLocation appTheme={appTheme} navigation={navigation} />

            {/* Detials */}
            <View style={[styles.DetialsContainer, { backgroundColor: appTheme.backgroundColor }]}>
                {/* TabLocation Components */}
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    {/* use three TabLocation Component  */}
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

            {/*Search Box  */}
            <View
                style={{
                    alignItems: "center",
                    flexDirection: "row",
                    borderRadius: SIZES.radius,
                    marginLeft: SIZES.padding + 10,
                    height: 50,
                    width: (windowWidth / 2) * 1.6,
                    borderWidth: 1,
                    borderColor: appTheme.textColor,
                    backgroundColor: COLORS.lightGreen2,
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <TextInput placeholder="Enter Your City" placeholderTextColor={COLORS.lightGray} style={{ marginLeft: 5, textAlign: "left" }} />

                <TouchableOpacity onPress={() => console.log("hello")}>
                    <Image source={icons.search} style={{ marginRight: 10 }} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    DetialsContainer: {
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
