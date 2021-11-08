import React from "react";
import { View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const DesignButton = ({ children, stylesContent, labelStyle, onPress }) => {
    return (
        <View style={{ ...stylesContent }}>
            <TouchableWithoutFeedback onPress={onPress}>
                <Text style={{ ...labelStyle }}>{children}</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default DesignButton;
