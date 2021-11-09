import React from "react";
import { Text } from "react-native";
import { FONTS, COLORS } from "../constants";

const HeaderRewards = ({ appTheme }) => {
    return (
        <>
            <Text style={{ ...FONTS.h3, color: COLORS.primary, marginVertical: 10 }}>جوایز شگفت اگیز</Text>
            <Text style={{ ...FONTS.h5, color: appTheme.textColor, marginVertical: 10 }}>برای دریافت جوایز پیج اینستاگرام ما را دنبال کنید</Text>
        </>
    );
};

export default HeaderRewards;
