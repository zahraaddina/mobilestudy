import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

export default function Index() {
    const { nama } = useLocalSearchParams();
    return (
        <View>
            <Text style = {{fontSize : 50}}>{nama}</Text>
        </View>
)};