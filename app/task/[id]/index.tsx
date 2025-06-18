import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";


//manggil id nya pake useLocalSearchParams
export default function PostDetailPage() {
    const { id } = useLocalSearchParams();

    const [task, setTask] = useState(); //untuk menyimpan data task yg diambil dari API
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function getTask() {
            const response = await axios.get(`https://api-organiz.my.id/api/tasks/${id}`); //ambil data task dari API berdasarkan id
            console.log("data", response.data);
            console.log("status", response.status);
            
            setTask(response.data);
            setLoading(false);
        }
        getTask();

    }, []);

    const handleSave = async () => { //mengirim data task yang sudah diedit ke API menggunakan metode PUT
        try {
            await axios.put(`https://api-organiz.my.id/api/tasks/${id}`, task);
            console.log("Task updated successfully");
        } catch (error) {
            console.error("Error updating task:", error);
        }
    };
    
    console.log(task);

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Edit Task</Text>
            <TextInput //input untuk judul task
                style={styles.input}
                value={task.title}
                onChangeText={text => setTask({ ...task, title: text })}
                placeholder="Title"
            />
            <TextInput //input untuk deskripsi task
                style={styles.input}
                value={task.description}
                onChangeText={text => setTask({ ...task, description: text })}
                placeholder="Description"
                multiline
            />
            <Button title="Simpan" onPress={handleSave} />
        </View>

        //matiin dulu
        // <View>
        //     <Text>PostDetail Page</Text>
        //     <Text>{task?.title}</Text>
        //     <Text>{task?.description}</Text>
        // </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        marginVertical: 8,
        borderRadius: 4,
},
});