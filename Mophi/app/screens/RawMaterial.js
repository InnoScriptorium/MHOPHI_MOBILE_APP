import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import DashboardComponent from "../components/DashboardComponent";

const RawMaterial = () => {
  const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate("AA3005Aluminium");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <DashboardComponent name={"RecordGoodsMovement"} />
      <View style={styles.sectionContainer}>
        <View style={styles.rowButton}>
          <TouchableOpacity style={styles.sButton}>
            <Text style={styles.sButtonText}>S1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.s2Button}>
            <Text style={styles.sButtonText}>S2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sButton}>
            <Text style={styles.sButtonText}>S3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sButton}>
            <Text style={styles.sButtonText}>S4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sButton}>
            <Text style={styles.sButtonText}>S5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sButton}>
            <Text style={styles.sButtonText}>S6</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionText}>Select Material</Text>
      </View>
      <View>
        <View style={styles.textRow}>
          <Text style={styles.text1text}>
            AA 3005 Aluminium Sheets-0.5mm thick
          </Text>
          <TouchableOpacity onPress={handleLoginPress}>
            <Text>&gt;</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.text1text}>
            Aluminium 3003 Strips-0.3mm thick,40m
          </Text>
          <Text>&gt;</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.text1text}>Plastic Top Tanks</Text>
          <Text>&gt;</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.text1text}>Plastic Bottom Tanks</Text>
          <Text>&gt;</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#6AF228",
    height: 100,
    borderBottomColor: "white",
    borderBottomWidth: 5,
    margin: 5,
  },
  safeArea: {
    paddingTop: Constants.statusBarHeight,
  },
  sectionText: {
    color: "white",
    fontSize: 20,
    flex: 1,
    fontWeight: "700",
    textAlign: "center",
  },
  s2Button: {
    backgroundColor: "blue",
    height: 30,
    width: "12.5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

    margin: 7,
  },
  sButton: {
    backgroundColor: "grey",
    height: 30,
    width: "12.5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

    margin: 7,
  },
  sButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
  },
  rowButton: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  text1text: {
    fontSize: 15,
    fontWeight: "600",
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
    marginVertical: 30,
  },
});

export default RawMaterial;
