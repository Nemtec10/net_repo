import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";

const MENU = [
  { id: "1", name: "Pizza", price: "TZS 8,000" },
  { id: "2", name: "Burger", price: "TZS 5,000" },
  { id: "3", name: "Fried Chicken", price: "TZS 7,000" },
  { id: "4", name: "Chips", price: "TZS 3,000" },
  { id: "5", name: "Soda", price: "TZS 2,000" },
];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredMenu = MENU.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍔 Food Menu</Text>

      <TextInput
        style={styles.search}
        placeholder="Search food..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.food}>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  card: {
    padding: 15,
    backgroundColor: "#f2f2f2",
    marginBottom: 10,
    borderRadius: 8,
  },
  food: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
