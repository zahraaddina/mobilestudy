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
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

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

	//delete
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

	//post 
	async function saveTask() {
		await axios.post("https://api-organiz.my.id/api/tasks", {
			title,
			description,
		});
		await getTasks();
		//reset form setelah disimpan
		setTitle("");
		setDescription("");
	}

	return (
		<View style={styles.container}>
			<Komponen
			/>

			<Text style={{ fontSize: 30 }}>Form Tasks</Text>
			<Text style={{ fontSize: 20 }}>Title</Text>
			<TextInput
				value={title}
				onChangeText={(text) => setTitle(text)}
				style={styles.textinput}
				placeholder="Masukkan judul"
			/>
			<Text style={{ fontSize: 20 }}>Deskripsi</Text>
			<TextInput
				value={description}
				onChangeText={(text) => setDescription(text)}
				style={styles.textinput}
				placeholder="Masukkan deskripsi"
				/>

			<Button title="Simpan" onPress={saveTask} />
			<Text style={{ fontSize: 30 }}>Tasks</Text>
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
		gap: 20,
	},
	box: {
		backgroundColor: "#eee",
		height: 100,
		width: 100,
	},
	textinput: {
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		padding: 5,
		width: 550,
		marginBottom: 15,
		fontSize: 16,
	},
});
