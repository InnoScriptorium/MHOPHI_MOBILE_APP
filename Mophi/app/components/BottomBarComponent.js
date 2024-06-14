import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const BottomBarComponent = ({ size }) => {
  return (
    <View style={styles.bottomBar}>
      <View style={styles.row}>
        <Text style={styles.text}>Entered Parameters: 0/{size}</Text>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Button Pressed")}>
          <Text style={styles.buttonText}>Go To Next Card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBarComponent;

const styles = StyleSheet.create({
  bottomBar: {
    height: 60,
    backgroundColor: "#F1F4F9",
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    fontWeight:"bold "
  },
  button: {
    backgroundColor: "#E24427",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
