import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../constants";
// style={{ color: selected ? COLORS.white : COLORS.black }}
const ButtonVertical = ({ label, onPress, selected }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                justifyContent: "center",
                transform: [{ rotate: "-90deg" }],
                backgroundColor: selected ? COLORS.lightGreen : COLORS.white,
                marginTop: 60,
                alignItems: "center",
                padding: 5,
                borderRadius: 40,
            }}
        >
            <Text style={{ color: selected ? COLORS.white : COLORS.black }}>{label}</Text>
        </TouchableOpacity>
    );
};

export default ButtonVertical;
