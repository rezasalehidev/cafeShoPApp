import React from "react";
import { Text } from "react-native";
import { FONTS, COLORS } from "../constants";

const HeaderRewards = ({ appTheme }) => {
    return (
        <>
            <Text style={{ ...FONTS.h3, color: COLORS.primary, marginVertical: 10 }}>Rewards</Text>
            <Text style={{ ...FONTS.h5, color: appTheme.textColor, marginVertical: 10 }}>if You Want Reward Follow Instagram CafeShop</Text>
        </>
    );
};

export default HeaderRewards;
