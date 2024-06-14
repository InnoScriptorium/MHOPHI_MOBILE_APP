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

const DashboardScreen = () => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("AssignmentDetail");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <DashboardComponent name="Dashboard" />
        </View>
        <View style={styles.separator} />
        <View style={styles.assignmentContainer}>
          <View style={styles.assignmentWelContainer}>
            <Text style={styles.textContainer}>Hello Ashutosh</Text>
            <Text style={styles.textContainer}>
              Welcome back ! here is the order summary and work card summary for
              you.
            </Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.assignmentDetailsContainer}>
          <Text style={styles.text1Container}>Order Summary</Text>
          <View style={styles.statsContainer1}>
            <View style={styles.statBox2}>
              <Text style={styles.label1}>Order No:IOO-05/2024-2</Text>
              <Text style={styles.label1}>Quantity:500</Text>
              <Text style={styles.label1}>WIP%:25.00</Text>
              <Text style={styles.label1}>Complete %:0.00</Text>
              <Text style={styles.label1}>Pending %:75.00</Text>
            </View>
            <View style={styles.statBox2}>
              <Text style={styles.label1}>Order No:IOO-05/2024-2</Text>
              <Text style={styles.label1}>Quantity:500</Text>
              <Text style={styles.label1}>WIP%:25.00</Text>
              <Text style={styles.label1}>Complete %:0.00</Text>
              <Text style={styles.label1}>Pending %:75.00</Text>
            </View>
          </View>
          <View style={styles.statsContainer1}>
            <View style={styles.statBox2}>
              <Text style={styles.label1}>Order No:IOO-05/2024-2</Text>
              <Text style={styles.label1}>Quantity:500</Text>
              <Text style={styles.label1}>WIP%:25.00</Text>
              <Text style={styles.label1}>Complete %:0.00</Text>
              <Text style={styles.label1}>Pending %:75.00</Text>
            </View>
            <View style={styles.statBox2}>
              <Text style={styles.label1}>Order No:IOO-05/2024-2</Text>
              <Text style={styles.label1}>Quantity:500</Text>
              <Text style={styles.label1}>WIP%:25.00</Text>
              <Text style={styles.label1}>Complete %:0.00</Text>
              <Text style={styles.label1}>Pending %:75.00</Text>
            </View>
          </View>
          <View style={styles.statsContainer1}>
            <View style={styles.statBox2}>
              <Text style={styles.label1}>Order No:IOO-05/2024-2</Text>
              <Text style={styles.label1}>Quantity:500</Text>
              <Text style={styles.label1}>WIP%:25.00</Text>
              <Text style={styles.label1}>Complete %:0.00</Text>
              <Text style={styles.label1}>Pending %:75.00</Text>
            </View>
            <View style={styles.statBox2}>
              <Text style={styles.label1}>Order No:IOO-05/2024-2</Text>
              <Text style={styles.label1}>Quantity:500</Text>
              <Text style={styles.label1}>WIP%:25.00</Text>
              <Text style={styles.label1}>Complete %:0.00</Text>
              <Text style={styles.label1}>Pending %:75.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.productionSummaryContainer}>
          <Text style={styles.text1Container}>Workcard Summary</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statBox1}>
              <Text style={styles.label1}>Active Cards</Text>
              <Text style={styles.value1}>865</Text>
            </View>
            <View style={styles.statBox1}>
              <Text style={styles.label1}>Completed Cards</Text>
              <Text style={styles.value1}>154</Text>
            </View>
            <View style={styles.statBox1}>
              <Text style={styles.label1}>Pending Cards</Text>
              <Text style={styles.value1}>711</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
        <View style={styles.separator} />
        <View style={styles.assignmentContainer}>
          <View style={styles.assignmentWelContainer}>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.textContainer} onPress={handleLoginPress}>
                Assignment Info
              </Text>
            </TouchableOpacity>
            <Text style={styles.textContainer}>
              You have an assignment today
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

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
  statsContainer1: {
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
  statBox2: {
    backgroundColor: "white",
    width: 150,
    height: 90,
    marginTop: 10,
    borderRadius: 10,
    padding: 5,
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
