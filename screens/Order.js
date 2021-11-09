import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, FlatList } from "react-native";
import HeaderOrder from "../components/HeaderOrder";
import { connect } from "react-redux";
import { icons, FONTS, SIZES, COLORS, dummyData } from "../constants";
import TabLocation from "./../components/TabLocation";
import ButtonVertical from "./../components/ButtonVertical";
import { ScrollView } from "react-native-gesture-handler";

const Order = ({ navigation, appTheme, route }) => {
    const [selectItem, setSelectItem] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);
    const [selecttab, setSelecttab] = useState("Milk Tea");
    const [menu, setMenu] = useState(null);
    const { selectItemLocation } = route.params;

    const windowWidth = Dimensions.get("window").width;

    useEffect(() => {
        setSelectItem(selectItemLocation);
    }, [selectItemLocation]);

    useEffect(() => {
        const menuList = dummyData.menuList.filter((menuItem) => menuItem.category == selecttab);
        setMenu(menuList);
    }, [selecttab]);

    return (
        <View style={styles.container}>
            {/* header Order */}
            <HeaderOrder appTheme={appTheme} navigation={navigation} selectItem={selectItem} />

            <View style={[{ backgroundColor: appTheme.backgroundColor, flex: 1 }]}>
                {/* tab Menu Order */}
                <View style={[styles.DetialsContainer, { backgroundColor: appTheme.backgroundColor }]}>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 15 }}>
                        {/* use three Tab Order Component  */}
                        <TabLocation
                            containerStyle={{
                                width: 80,
                            }}
                            label="منو"
                            onPress={() => setSelectedTab(0)}
                            selected={selectedTab == 0 ? true : false}
                        />
                        <TabLocation
                            containerStyle={{
                                width: 100,
                            }}
                            label="همیشگی"
                            onPress={() => setSelectedTab(1)}
                            selected={selectedTab == 1 ? true : false}
                        />
                        <TabLocation
                            containerStyle={{
                                width: 100,
                            }}
                            label="بهترین"
                            onPress={() => setSelectedTab(2)}
                            selected={selectedTab == 2 ? true : false}
                        />

                        <View style={{ position: "absolute", right: 15 }}>
                            <Text style={{ backgroundColor: COLORS.lightGreen, padding: 7, borderRadius: 50 }}>0</Text>
                        </View>
                    </View>
                </View>
            </View>

            {/* Details */}
            <View style={{ flexDirection: "row", flex: 4, backgroundColor: appTheme.backgroundColor }}>
                {/* listings */}
                <View style={{ flex: 4 }}>
                    <FlatList
                        data={menu}
                        keyExtractor={(item) => item.id}
                        ListFooterComponent={<View style={{ paddingBottom: 40 }} />}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ flexDirection: "row", marginTop: 10 }}>
                                    <View style={{ width: 90, height: 110, backgroundColor: COLORS.lightYellow, justifyContent: "center", alignItems: "center", marginLeft: 20, borderRadius: 10 }}>
                                        <Image source={item.thumbnail} style={{ width: 60, height: 60 }} />
                                    </View>
                                    <View
                                        style={{
                                            alignItems: "center",
                                            width: 130,
                                            height: 110,
                                            backgroundColor: COLORS.lightGreen,
                                            position: "absolute",
                                            zIndex: -1,
                                            left: 105,
                                            top: 10,
                                            borderRadius: 10,
                                        }}
                                    >
                                        <Text style={{ color: COLORS.white, marginTop: 10, fontSize: 11 }} numberOfLines={1}>
                                            {item.name}
                                        </Text>
                                        <Text style={{ marginTop: 10, color: COLORS.white, fontSize: 11 }}>Price : {item.price}$</Text>
                                        <TouchableOpacity style={{ fontSize: 11, marginTop: 20, backgroundColor: COLORS.lightPink, padding: 8, borderRadius: 10 }}>
                                            <Text style={{ fontSize: 11 }}>خرید</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            );
                        }}
                    />
                </View>

                {/* sideBar */}
                <View style={{ backgroundColor: COLORS.primary, flex: 1, borderRadius: 20, marginRight: -20, marginBottom: 20 }}>
                    <ButtonVertical label="قهوه" onPress={() => setSelecttab("Milk Tea")} selected={selecttab == "Milk Tea" ? true : false} />
                    <ButtonVertical label="شیر" onPress={() => setSelecttab("Specialtea")} selected={selecttab == "Specialtea" ? true : false} />
                    <ButtonVertical label="چای" onPress={() => setSelecttab("Smoothie")} selected={selecttab == "Smoothie" ? true : false} />
                    <ButtonVertical label="آب" onPress={() => setSelecttab("Coffee")} selected={selecttab == "Coffee" ? true : false} />
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
