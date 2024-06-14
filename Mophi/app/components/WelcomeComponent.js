import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WelcomeComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statsContainer}>
        <View style={styles.statBox1}>
          <Text style={styles.title}>Hello Ashutosh</Text>
        </View>
        <View style={styles.statBox1}>
          <Text style={styles.title1}>
            Welcome Back! here is the order summary and work card summary for
            your organisation
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "green",
    borderBottomColor: "#ddd",
    height: 110,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  title1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default WelcomeComponent;
