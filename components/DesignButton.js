import React from "react";
import { View, Text } from "react-native";

const DesignButton = ({ children, stylesContent, labelStyle }) => {
    return (
        <View style={{ ...stylesContent }}>
            <Text style={{ ...labelStyle }}>{children}</Text>
        </View>
    );
};

export default DesignButton;
