import React from "react";
import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

const WorkCardListComponent = ({ name, value }) => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View
      style={[
        styles.container,
        isLandscape ? { width: width - 20 } : { width: "97%" },
      ]}
    >
      <View style={styles.statsContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome6 name="compass-drafting" size={80} color="white" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.title}>{value}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 1,
    backgroundColor: "#6AE228",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    paddingLeft: 15,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WorkCardListComponent;
