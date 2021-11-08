import React from "react";
import { View, Text, StyleSheet, FlatList, ImageBackground } from "react-native";
import { dummyData, FONTS, SIZES, COLORS, icons } from "../constants";
import HeaderBar from "./../components/HeaderBar";
import { connect } from "react-redux";
import ImageRewards from "./../components/ImageRewards";
import DesignButton from "../components/DesignButton";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import HeaderRewards from "./../components/HeaderRewards";

const Rewards = ({ navigation, appTheme }) => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <HeaderBar />

            {/* Details */}
            <FlatList
                style={{
                    marginTop: 65,
                    backgroundColor: appTheme.backgroundColor,
                    borderTopLeftRadius: SIZES.radius,
                    borderTopRightRadius: SIZES.radius,
                    width: "100%",
                }}
                data={dummyData.availableRewards}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        {/* header */}
                        <HeaderRewards appTheme={appTheme} />
                        {/* images */}
                        <ImageRewards />
                        {/* Buttons */}
                        <View style={{ flexDirection: "row", marginVertical: 10 }}>
                            <DesignButton
                                stylesContent={{ backgroundColor: COLORS.primary, width: 80, height: 25, borderRadius: 12, justifyContent: "center", alignItems: "center", marginHorizontal: 5 }}
                                labelStyle={{ color: COLORS.white }}
                                onPress={() => navigation.navigate("Location")}
                            >
                                Shop
                            </DesignButton>
                            <DesignButton
                                stylesContent={{
                                    backgroundColor: COLORS.white,
                                    width: 80,
                                    height: 25,
                                    borderRadius: 12,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginHorizontal: 20,
                                    borderColor: COLORS.black,
                                    borderWidth: 1,
                                }}
                                onPress={() => navigation.navigate("Location")}
                                labelStyle={{ color: COLORS.black, fontSize: 12 }}
                            >
                                New Order
                            </DesignButton>
                        </View>

                        {/* Text Available */}
                        <Text style={{ alignSelf: "flex-start", marginHorizontal: 25, marginVertical: 10, color: appTheme.textColor }}>Available Now</Text>
                    </View>
                }
                renderItem={({ item }) => {
                    return (
                        <View
                            style={{
                                backgroundColor: item.eligible ? COLORS.yellow : COLORS.lightGray2,
                                alignItems: "center",
                                justifyContent: "center",
                                paddingVertical: SIZES.base,
                                borderRadius: 20,
                                marginBottom: SIZES.base,
                                marginHorizontal: SIZES.padding,
                            }}
                        >
                            <TouchableWithoutFeedback onPress={() => navigation.navigate("Location")}>
                                <Text
                                    style={{
                                        color: item.eligible ? COLORS.black : COLORS.white,
                                        ...FONTS.body5,
                                    }}
                                >
                                    {item.title}
                                </Text>
                            </TouchableWithoutFeedback>
                        </View>
                    );
                }}
                ListFooterComponent={<View style={{ marginBottom: 100 }} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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

export default connect(mapStateToProps, mapDistpatchToProps)(Rewards);
