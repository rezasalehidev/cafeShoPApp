import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, Image, FlatList } from "react-native";
import HeaderLocation from "./../components/HeaderLocation";
import { connect } from "react-redux";
import { SIZES, COLORS, icons, dummyData, FONTS } from "../constants";
import TabLocation from "../components/TabLocation";
import DesignButton from "./../components/DesignButton";

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
                    height: 50,
                    width: (windowWidth / 2) * 1.6,
                    borderWidth: 1,
                    borderColor: appTheme.textColor,
                    backgroundColor: COLORS.lightGreen2,
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <TextInput
                    value={search}
                    onChangeText={(value) => setSearch(value)}
                    placeholder="Enter Your City"
                    placeholderTextColor={COLORS.lightGray}
                    style={{ marginLeft: 5, textAlign: "left", flex: 1 }}
                />

                <TouchableOpacity onPress={() => console.log("hello")}>
                    <Image source={icons.search} style={{ marginRight: 10 }} />
                </TouchableOpacity>
            </View>

            {/* List location (FlatList) */}
            <FlatList
                keyExtractor={(item) => item.id}
                data={dummyData.locations}
                showsVerticalScrollIndicator={false}
                keyboardDismissMode="on-drag"
                style={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.radius,
                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={[styles.tochableContainer, { backgroundColor: COLORS.lightGray2 }]} onPress={() => navigation.navigate("Order", { selectItemLocation: item })}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <View>
                                    <Text style={{ color: COLORS.white, ...FONTS.body2 }}>Graden Grown {item.id}</Text>
                                    <Text style={{ color: COLORS.white, ...FONTS.body4 }}>Iran{item.id}</Text>
                                    <Text style={{ color: COLORS.white }}>Tehran {item.id}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Image
                                            source={item.bookmarked ? icons.bookmarkFilled : icons.bookmark}
                                            style={{ width: 20, height: 20, marginLeft: 25, tintColor: item.bookmarked ? "orange" : COLORS.white }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <DesignButton
                                    stylesContent={{
                                        backgroundColor: COLORS.primary,
                                        width: 80,
                                        height: 25,
                                        borderRadius: 12,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginHorizontal: 5,
                                        marginTop: 10,
                                    }}
                                    labelStyle={{ color: COLORS.white }}
                                    onPress={() => navigation.navigate("Location")}
                                >
                                    فروشگاه
                                </DesignButton>
                                <DesignButton
                                    stylesContent={{
                                        backgroundColor: "transparent",
                                        width: 80,
                                        height: 25,
                                        borderRadius: 12,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginHorizontal: 5,
                                        marginTop: 10,
                                        borderColor: COLORS.white,
                                        borderWidth: 1,
                                    }}
                                    labelStyle={{ color: COLORS.white }}
                                    onPress={() => navigation.navigate("Location")}
                                >
                                    Delivery
                                </DesignButton>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    DetialsContainer: {
        padding: SIZES.padding,
        borderTopLeftRadius: SIZES.radius * 2,
        borderTopRightRadius: SIZES.radius * 2,
        marginTop: -20,
    },
    tochableContainer: {
        padding: SIZES.padding,
        marginVertical: SIZES.radius,
        borderRadius: SIZES.radius,
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
