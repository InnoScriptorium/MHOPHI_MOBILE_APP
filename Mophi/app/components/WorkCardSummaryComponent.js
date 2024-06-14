// components/Dashboard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WorkCardSummaryComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workcard Summary</Text>
      <View style={styles.statsContainer}>
        <View style={styles.statBox1}></View>
        <View style={styles.statBox1}></View>
        <View style={styles.statBox1}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "purple",
    borderBottomColor: "#ddd",
    height: 200,
  },
  statBox1: {
    backgroundColor: "white",
    borderBottomColor: "#ddd",
    width: 120,
    height: 100,
    marginTop: 20,
    borderRadius: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});

export default WorkCardSummaryComponent;
