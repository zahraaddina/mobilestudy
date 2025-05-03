import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="index" options={{ title: "Beranda" }} />
    <Stack.Screen name="kedua/index" options={{ title: "Data" }} />
  </Stack>
)};
