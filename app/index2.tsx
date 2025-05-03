

// import { Button, Text, Touchable, TouchableOpacity, View } from "react-native";
// import React, { useState } from "react";

// // TypeScript
// // const nama = "Budi";

// // let umur = 20;

// // let umur2 = 19;

// // const kalimat = `Nama saya ${nama}, umur saya ${umur} tahun`;

// // const angka = 2 + 2;

// // const benar : boolean = true || false;

// const dataDiri = {
//   nama: "sava",
//   umur: 20,
//   alamat: "Semarang",
// };

// const { nama, umur, alamat } = dataDiri;

// const nilai = [3, 2, 4];

// nilai[1] = 5;

// dataDiri.nama = "Bela";

// const [satu, dua, tiga] = nilai;


// export default function Index() {
//   const [nama, setNama] = useState("Sava"); //ini namnya hooks
//   const [umur, setUmur] = useState(20); //ini namanya hooks

//   // const handlePress = () => {
//   //   setNama("Bela");
//   // };
//   // const handlePress2 = () => {
//   //   setNama("Budi");
//   // };


//   // Fungsi untuk mengubah nama
//   function rubahNama() {
//     setNama("Aurellia");
//   }

//   const rubahNama2 = (nama: string, umur: number) => {
//     setNama(nama);
//     setUmur(umur);
//   }; //ini juga merubahan function variabel hanya perubahan syntaxnya

//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}>
//       <Text>Nilai ke-2: {nilai[1]}</Text>
//       <Text style={{ fontSize: 50, color: "red", backgroundColor: "yellow" }}>
//         Hallo {nama}, umur: {umur}, nilai: {nilai[1]}
//       </Text>
//       <Button color="red" title="Rubah Nama" onPress={rubahNama} />
//       <TouchableOpacity onPress={() => rubahNama2("Rensy", 23)} style={{ backgroundColor: "blue" }}>
//         <Text >Tombol</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

//
