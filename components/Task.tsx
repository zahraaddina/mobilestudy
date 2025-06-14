import { Button, StyleSheet, Text, View } from "react-native";
import React from"react"; 
import { green } from "react-native-reanimated/lib/typescript/Colors";
import { router, useRouter } from "expo-router";

type Task = {
	id: number;
	title: string;
	description: string;
};

export default function Task({
	task,
	onDelete,}:{
	task: Task,
	onDelete: () => void;}) {
		const router = useRouter();
    return (
        <View key={task.id}>
					
					<Text style={{ fontSize: 30 }}>{task.id}</Text>
					<Text style={{ fontSize: 30 }}>{task.title}</Text>
					<Text style={{ fontSize: 30 }}>{task.description}</Text>
					<View style={{ flexDirection: "row", gap: 10, alignSelf: "center", marginTop: 10 }}>
					<Button 
						title="Hapus"
						color={"red"}
						onPress={onDelete}
					/>
					<Button
						title="Edit"
						color={"black"}
						onPress={() => router.push(`/task/${task.id}`)}
					/>

				</View>
				</View>
    );
}

const styles = StyleSheet.create({});