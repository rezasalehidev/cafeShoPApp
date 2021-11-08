import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS } from "./../constants";

const TabLocation = ({ containerStyle, selected, onPress, label }) => {
    return (
        <TouchableOpacity style={[styles.TabContainer, { ...containerStyle }]} onPress={onPress}>
            <Text
                style={{
                    color: selected ? COLORS.primary : COLORS.gray,
                    ...FONTS.body2,
                    fontSize: 18,
                }}
            >
                {label}
            </Text>

            {/* Line */}
            <View
                style={{
                    marginTop: selected ? 3 : 4,
                    height: selected ? 4 : 2,
                    width: "100%",
                    backgroundColor: selected ? COLORS.primary : COLORS.gray,
                }}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    TabContainer: {
        alignItems: "center",
    },
});

export default TabLocation;
