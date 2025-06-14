import Komponen from "@/components/Komponen";
import Task from "@/components/Task";
import axios from "axios";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, Alert } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

type Task = {
	id: number;
	title: string;
	description: string;
};

export default function Index() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [loading, setLoading] = useState(true);

	async function getTasks() {
			const response = await axios.get(
				"https://api-organiz.my.id/api/tasks",
			);
			setTasks(response.data);
			setTimeout(() => {
			setLoading(false);
			}, 3000);
		}

	useEffect(() => {
		getTasks();
	}, []);

	async function deleteTask(id: number) {
		await axios.delete(`https://api-organiz.my.id/api/tasks/${id}`),
		await getTasks();
	}

	console.log(tasks);

	function onDelete(id: number) {
		Alert.alert("Hapus", "Apakah anda yakin ingin menghapus?", [
			{
				text: "Batal"
			},
			{
				text: "Hapus", onPress: () => deleteTask(id),
			}
		]
		);
	}

	if (loading) {
		return (
			<View style={styles.container}>
				<Text style={{ fontSize: 30 }}>Loading</Text>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Komponen
			/>

			<Text style={{ fontSize: 30 }}>Tasks fsfssdfds</Text>
			{/* <ScrollView>
				{tasks.map((task) => (
					<Task item = {task}/>
				))}
			</ScrollView> */}

			<FlatList
				data={tasks}
				renderItem={({ item }) => (
					<Task
						task={item}
						onDelete={() => onDelete(item.id)}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
	},
	box: { backgroundColor: "red", height: 100, width: 100 },
});
