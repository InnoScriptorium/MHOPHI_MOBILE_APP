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

const AssignmentDetailScreen = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("QRCodeScreen");
  };
  const handleLoginPress1 = () => {
    navigation.navigate("ActWork");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <DashboardComponent name="Assignment Detail" />
        </View>
        <View style={styles.separator} />
        <View style={styles.assignmentContainer}>
          <View style={styles.assignmentWelContainer}>
            <Text style={styles.textContainer}>
              Assignment Details For: Ashutosh
            </Text>
          </View>
          <View style={styles.assignmentIconContainer}></View>
        </View>
        <View style={styles.separator} />
        <View style={styles.assignmentDetailsContainer}>
          <Text style={styles.text1Container}>Assignment Details</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.value}>03-06-2024</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Shift:</Text>
            <Text style={styles.value}>Regular Shift</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Department:</Text>
            <Text style={styles.value}>Assembly</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Activity:</Text>
            <Text style={styles.value}>SEMI AUTO CORE ASSY</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Workstation:</Text>
            <Text style={styles.value}>ATPL/SPM/99</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Skill:</Text>
            <Text style={styles.value}>Welding</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Attendance Status:</Text>
            <Text style={styles.value}>Present </Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
              <Text style={styles.buttonText}>Scan QR code</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button1} onPress={() => {}}>
              <Text style={styles.buttonText}>Show Production Summary</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.productionSummaryContainer}>
          <Text style={styles.text1Container}>Production Summary</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statBox1}>
              <Text style={styles.label1}>Assigned Cards</Text>
              <Text style={styles.value1}>100</Text>
            </View>
            <View style={styles.statBox1}>
              <Text style={styles.label1}>Completed Cards</Text>
              <Text style={styles.value1}>80</Text>
            </View>
            <View style={styles.statBox1}>
              <Text style={styles.label1}>Delayed Cards</Text>
              <Text style={styles.value1}>20</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button1}
              onPress={handleLoginPress1}
            >
              <Text style={styles.buttonText}>Show Work Cards</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AssignmentDetailScreen;

const styles = StyleSheet.create({
  safeArea: {
    //flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  assignmentContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6AE228",
    padding: 10,
  },
  assignmentWelContainer: {
    flex: 1,
  },
  assignmentIconContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    height: 50,
  },
  textContainer: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
  assignmentDetailsContainer: {
    backgroundColor: "#28C6E3",
    padding: 10,
  },
  text1Container: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    color: "white",
    marginRight: 5,
  },
  value: {
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#E24427",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  button1: {
    backgroundColor: "#6AE228",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  productionSummaryContainer: {
    backgroundColor: "#A028E2",
    padding: 10,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statBox1: {
    backgroundColor: "white",
    width: 100,
    height: 60,
    marginTop: 10,
    borderColor: "#FFD700",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label1: {
    fontSize: 12,
    fontWeight: "bold",
  },
  value1: {
    fontSize: 16,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 5,
  },
});
