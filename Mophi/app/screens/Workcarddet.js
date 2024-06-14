import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";
import DashboardComponent from "../components/DashboardComponent";
import React from "react";

const Workcarddet = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <DashboardComponent name="Work Card Details" />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionText}>Workcard No null</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardLine}>
            <Text style={styles.CardText}>Workstation:</Text>
            <Text style={styles.CardText1}>null</Text>
          </View>
          <View style={styles.cardLine}>
            <Text style={styles.CardText}>Order No:</Text>
            <Text style={styles.CardText1}>null</Text>
          </View>
          <View style={styles.cardLine}>
            <Text style={styles.CardText}>Product Name:</Text>
            <Text style={styles.CardText1}>null</Text>
          </View>
          <View style={styles.cardLine}>
            <Text style={styles.CardText}>Activity Name:</Text>
            <Text style={styles.CardText1}>null</Text>
          </View>
          <View style={styles.cardLine}>
            <Text style={styles.CardText}>Production Line:</Text>
            <Text style={styles.CardText1}>null</Text>
          </View>
          <View style={styles.cardLine}>
            <Text style={styles.CardText}>Tracking No:</Text>
            <Text style={styles.CardText1}>null</Text>
          </View>
          <View style={styles.cardLine}>
            <Text style={styles.CardText}>Variance:</Text>
            <Text style={styles.CardText1}>null</Text>
          </View>
          <View style={styles.cardLine}>
            <Text style={styles.CardText}>Quantity:</Text>
            <Text style={styles.CardText1}>null</Text>
          </View>
          <View style={styles.cardLine}>
            <Text style={styles.CardText}>Required Ageing:</Text>
            <Text style={styles.CardText1}>To be integrated</Text>
          </View>
          <View style={styles.cardLine}>
            <Text style={styles.CardText}>Actual Ageing:</Text>
            <Text style={styles.CardText1}>To be integrated</Text>
          </View>
          <View style={styles.cardLine}>
            <Text style={styles.CardText}>Date of Mfg:</Text>
            <Text style={styles.CardText1}>null</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button1} onPress={() => {}}>
          <Text style={styles.buttonText}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => {}}>
          <Text style={styles.buttonText}>Generate QR Code</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  sectionContainer: {
    backgroundColor: "#6AF228",
    height: 100,
    borderColor: "white",
    borderWidth: 5,
  },
  sectionText: {
    color: "white",
    fontSize: 25,
    fontWeight: "700",
  },
  cardContainer: {
    backgroundColor: "#28C6E3",
    height: 460,
    borderColor: "white",
    borderWidth: 5,
    padding: 5,
  },
  cardLine: {
    flexDirection: "row",
  },
  CardText: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    padding: 5,
  },
  CardText1: {
    fontSize: 15,
    fontWeight: "500",
    color: "blue",
    marginTop: 10,
  },
  button1: {
    backgroundColor: "#6AE228",
    width: "90%",
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: 8,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
  },
});
export default Workcarddet;
