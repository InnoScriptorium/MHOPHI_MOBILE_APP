// components/Dashboard.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";

const AssignmentInfoComponent = () => {
  const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate("AssignmentDetail");
  };
  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.title}>Assignment info</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "yellowgreen",
    borderBottomColor: "#ddd",
    height: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  statsContainer: {
    flexDirection: "row",
  },
  statBox: {
    alignItems: "center",
    marginLeft: 30,
  },
  statBox1: {
    alignItems: "center",
    marginTop: 5,
  },
});

export default AssignmentInfoComponent;
