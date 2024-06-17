import DashboardComponent from "../components/DashboardComponent";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import Constants from "expo-constants";

const buttonContainersData = [
  {
    title: "BLANKING",
    description: "Operation used to create the header",
    workcardsNo: "500",
  },
  {
    title: "PIERCING",
    description: "Operation used to create the header",
    workcardsNo: "450",
  },
  {
    title: "DRAWING",
    description: "Operation used to create the header",
    workcardsNo: "850",
  },
  {
    title: "SEMI AUTO CORE ASSY",
    description:
      "Operations that stacks alternate layers of fins and tubes and attaching",
    workcardsNo: "960",
  },
  {
    title: "FORMING",
    description: "Operation to create the side frames",
    workcardsNo: "200",
  },
  {
    title: "BRAZING",
    description: "Operations to join the radiator pipes with the fins",
    workcardsNo: "Workcards No:400",
  },
];

const ProcessParameters = () => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("QRCodeScreen");
  };
  const handleLoginPress1 = () => {
    navigation.navigate("ActiveWorkCards");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <DashboardComponent name="Process Parameters" />
        </View>
        <View style={styles.separator} />
        <View style={styles.assignmentContainer}>
          <Text style={styles.textContainer}>Browse Workcard List or Scan</Text>
          <Text style={styles.textContainer1}>
            To record process parameters
          </Text>
        </View>
        <View style={styles.separator} />
        <Text style={styles.textContainer2}>Workcard By Activities</Text>
        <View style={styles.separator} />
        {buttonContainersData.map((data, index) => (
          <View style={styles.buttonContainer} key={index}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>{data.title}</Text>
              <Text style={styles.buttonText1}>{data.description}</Text>
              <Text style={styles.buttonText}>
                Workcards No:{data.workcardsNo}
              </Text>
              <View style={styles.buttonsWrapper}>
                <TouchableOpacity
                  onPress={handleLoginPress1}
                  style={styles.viewWorkcardButton}
                >
                  <Text style={{ color: "white" }}>View Workcard List</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleLoginPress}
                  style={styles.scanQRButton}
                >
                  <Text style={{ color: "white" }}>Scan QR code</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProcessParameters;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "flex-start",
    padding: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  assignmentContainer: {
    backgroundColor: "#6AE228",
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    alignItems: "left",
    justifyContent: "center",
  },
  textContainer: {
    fontWeight: "bold",
    fontSize: 24,
    color: "white",
    marginBottom: 5,
  },
  textContainer1: {
    fontSize: 18,
    color: "white",
    marginBottom: 10,
  },
  textContainer2: {
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 5,
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    minHeight: 150, // Ensure a minimum height for uniformity
    width: "100%",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left",
  },
  buttonText1: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: "left",
  },
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  separator: {
    height: 1,
    marginVertical: 5,
  },
  viewWorkcardButton: {
    backgroundColor: "#6AE228",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: "center",
  },
  scanQRButton: {
    backgroundColor: "#E24427",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
    alignItems: "center",
  },
});
