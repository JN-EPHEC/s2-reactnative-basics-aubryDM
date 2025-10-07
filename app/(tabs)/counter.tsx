import CounterScreen from "@/components/CounterScreen";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function HomeScreen() {


  return (
    <SafeAreaView style={styles.container}>
      <CounterScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  countText: {
    fontSize: 48,
    fontWeight: "600",
    marginVertical: 20,
  },
});
