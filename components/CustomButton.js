import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "./../constants/theme";

const CustomButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ marginTop: 7, justifyContent: "center", backgroundColor: COLORS.primary, padding: 7, borderRadius: 10 }}>
            <Text style={{ color: COLORS.white }}>{children}</Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
