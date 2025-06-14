import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";


//manggil id nya pake useLocalSearchParams
export default function PostDetailPage() {
    const { id } = useLocalSearchParams();

    const [task, setTask] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function getTask() {
            const response = await axios.get(`https://api-organiz.my.id/api/tasks/${id}`);
            console.log("data", response.data);
            console.log("status", response.status);
            setTask(response.data);
            setLoading(false);
        }
        getTask();

    }, []);

    console.log(task);

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    return (
        <View>
            <Text>PostDetail Page</Text>
            <Text>{task?.title}</Text>
            <Text>{task?.description}</Text>
        </View>
    );
}


const styles = StyleSheet.create({});
