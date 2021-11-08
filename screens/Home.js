import React from "react";
import { View, Text, StyleSheet, ImageBackground, Animated, Image } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import HeaderBar from "./../components/HeaderBar";
import { connect } from "react-redux";
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import constants from "./../constants/constants";
import dummyData from "./../constants/dummy";
import CustomButton from "./../components/CustomButton";

const dataTabs = constants.promoTabs.map((promoTab) => ({
    ...promoTab,
    ref: React.createRef(),
}));

const Home = ({ navigation, appTheme }) => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const tabRefReview = React.useRef();

    const onTabPress = React.useCallback((tabIndex) => {
        tabRefReview?.current?.scrollToOffset({
            offset: tabIndex * SIZES.width,
        });
    });

    const TabReview = () => {
        return (
            <TouchableWithoutFeedback style={styles.Rewards} onPress={() => console.log("salam")}>
                <View style={styles.RewardsLeft}>
                    <ImageBackground source={icons.reward_cup} style={styles.imgCup}>
                        <View style={styles.cupTextNumber}>
                            <Text style={{ fontSize: 10 }}>280</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.RewardsRight}>
                    <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>Available Rewards</Text>
                    <Text style={{ color: COLORS.white, ...FONTS.h4, backgroundColor: COLORS.primary, padding: 4, borderRadius: 7 }}>150Point - 2$</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    };

    const TabIndicator = ({ measureLayout, scrollX }) => {
        const inputRange = dataTabs.map((_, i) => i * SIZES.width);

        const tabIndicatorWidth = scrollX.interpolate({
            inputRange,
            outputRange: measureLayout.map((measure) => measure.width),
        });

        const translateX = scrollX.interpolate({
            inputRange,
            outputRange: measureLayout.map((measure) => measure.x),
        });

        return (
            <Animated.View
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: tabIndicatorWidth,
                    height: "100%",
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary,
                    transform: [
                        {
                            translateX,
                        },
                    ],
                }}
            />
        );
    };

    const Scrooltabs = () => {
        const [measureLayout, setMesureLayout] = React.useState([]);
        const containerRef = React.useRef();

        React.useEffect(() => {
            let ml = [];

            dataTabs.forEach((promo) => {
                promo.ref.current.measureLayout(containerRef.current, (x, y, width, height) => {
                    ml.push({
                        x,
                        y,
                        width,
                        height,
                    });

                    if (ml.length === dataTabs.length) {
                        setMesureLayout(ml);
                    }
                });
            });
        }, [containerRef.current]);

        return (
            <>
                <View ref={containerRef} style={{ flexDirection: "row", marginHorizontal: 30, marginTop: 10, borderRadius: SIZES.radius, backgroundColor: "#ddd" }}>
                    {measureLayout.length > 0 && <TabIndicator measureLayout={measureLayout} scrollX={scrollX} />}

                    {dataTabs.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => onTabPress(index)}>
                            <View ref={item.ref}>
                                <Text key={index} style={{ marginHorizontal: 15 }}>
                                    {item.title}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* details image scroll animated */}
                <Animated.FlatList
                    ref={tabRefReview}
                    data={dummyData.promos}
                    horizontal
                    pagingEnabled
                    scrollEventThrottle={19}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event(
                        // scrollX = e.nativeEvent.contentOffset.x
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: scrollX,
                                    },
                                },
                            },
                        ],
                        {
                            useNativeDriver: false,
                        }
                    )}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={item.id} style={{ alignItems: "center", paddingBottom: 15 }}>
                                <Image source={item.image} style={{ marginHorizontal: 20 }} />
                                <Text style={{ ...FONTS.h3, color: COLORS.primary }}>{item.name}</Text>
                                <Text style={{ ...FONTS.h5, color: appTheme.textColor }}>{item.description}</Text>
                                <CustomButton onPress={() => navigation.navigate("Location")}>onOrder</CustomButton>
                            </View>
                        );
                    }}
                />
            </>
        );
    };

    return (
        <View style={styles.container}>
            <HeaderBar />
            <View style={[styles.Home, { backgroundColor: appTheme.backgroundColor }]}>
                {/* rewards */}
                {TabReview()}

                {/* scroll tabs details */}
                {Scrooltabs()}
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
        paddingBottom: 15,
    },
    Rewards: {
        marginTop: SIZES.padding,
        marginHorizontal: SIZES.padding,
        flexDirection: "row",
        height: 100,
    },
    RewardsLeft: {
        backgroundColor: COLORS.pink,
        width: 100,
        height: "100%",
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    imgCup: {
        width: 70,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
    },
    cupTextNumber: {
        borderRadius: 12,
        backgroundColor: COLORS.lightGray3,
        padding: 1,
        marginTop: 9,
        fontSize: 7,
    },
    RewardsRight: {
        height: "100%",
        backgroundColor: COLORS.lightPink,
        flex: 1,
        borderRadius: 12,
        marginLeft: -10,
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
