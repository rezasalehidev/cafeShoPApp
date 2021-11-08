import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import HeaderOrder from "../components/HeaderOrder";
import { connect } from "react-redux";
import { icons, FONTS, SIZES, COLORS } from "../constants";
import TabLocation from "./../components/TabLocation";
import ButtonVertical from "./../components/ButtonVertical";

const Order = ({ navigation, appTheme, route }) => {
    const [selectItem, setSelectItem] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);
    const [selecttab, setSelecttab] = useState(0);
    const { selectItemLocation } = route.params;

    const windowWidth = Dimensions.get("window").width;

    useEffect(() => {
        setSelectItem(selectItemLocation);
    }, [selectItemLocation]);

    return (
        <View style={styles.container}>
            {/* header Order */}
            <HeaderOrder appTheme={appTheme} navigation={navigation} selectItem={selectItem} />

            {/* Details */}
            <View style={[{ backgroundColor: appTheme.backgroundColor, flex: 1 }]}>
                {/* tab Menu Order */}
                <View style={[styles.DetialsContainer, { backgroundColor: appTheme.backgroundColor }]}>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 15 }}>
                        {/* use three Tab Order Component  */}
                        <TabLocation
                            containerStyle={{
                                width: 80,
                            }}
                            label="Menu"
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

                        <View style={{ position: "absolute", right: 15 }}>
                            <Text style={{ backgroundColor: COLORS.lightGreen, padding: 7, borderRadius: 50 }}>0</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: "row", flex: 4, backgroundColor: appTheme.backgroundColor }}>
                {/* listings */}
                <View style={{ flex: 4 }}></View>

                {/* sideBar */}
                <View style={{ backgroundColor: COLORS.primary, flex: 1, borderRadius: 20, marginRight: -20, marginBottom: 20 }}>
                    <ButtonVertical label="Coffe" onPress={() => setSelecttab(0)} selected={selecttab == 0 ? true : false} />
                    <ButtonVertical label="milk" onPress={() => setSelecttab(1)} selected={selecttab == 1 ? true : false} />
                    <ButtonVertical label="tea" onPress={() => setSelecttab(2)} selected={selecttab == 2 ? true : false} />
                    <ButtonVertical label="water" onPress={() => setSelecttab(3)} selected={selecttab == 3 ? true : false} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default connect(mapStateToProps, mapDistpatchToProps)(Order);
