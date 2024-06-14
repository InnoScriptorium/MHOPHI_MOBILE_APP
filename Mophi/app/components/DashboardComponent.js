import React from "react";
import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const DashboardComponent = ({ name }) => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();
  const isLandscape = width > height;
  const handleLoginPress = () => {
    navigation.navigate("Sidebar");
  };
  return ( 
    <View
      style={[
        styles.container,
        isLandscape ? { width: width } : { width: "100%" },
      ]}
    >
      <View style={styles.statsContainer}>
        <View style={styles.statBox1}>
          <TouchableOpacity onPress={handleLoginPress}>

            <FontAwesome name="bars" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#E24427",
    borderBottomColor: "#ddd",
    height: 50,
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

export default DashboardComponent;