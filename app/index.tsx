import { useRouter } from "expo-router";
import React from "react";
import { View, StyleSheet, Button } from "react-native";

export default function Index() {
  const router =useRouter();

  fetch("https://dummyjson.com/quotes#")
    .then((res) => res.json())
    .then(console.log); 

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={{ backgroundColor: "pink", height: 20, width: 20 }}></View>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <Button title="Go to Details" onPress={() => router.push("./kedua")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        // Gunakan margin untuk memberikan jarak antar elemen
    },
    box: {
        backgroundColor: "red",
        width: 100,
        height: 100,
        marginHorizontal: 5, // Memberikan jarak antar box
    },
});