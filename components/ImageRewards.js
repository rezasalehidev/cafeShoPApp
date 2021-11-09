import React from "react";
import { Text, ImageBackground } from "react-native";
import { COLORS, icons } from "../constants";

const ImageRewards = () => {
    return (
        <>
            <ImageBackground source={icons.reward_cup} style={{ marginVertical: 20, width: 150, height: 150, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 7, padding: 10, borderRadius: 10, backgroundColor: COLORS.white, justifyContent: "center", alignItems: "center" }}>202</Text>
            </ImageBackground>
        </>
    );
};

export default ImageRewards;
