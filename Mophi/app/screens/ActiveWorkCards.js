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
import WorkCardListComponent from "../components/WorkCardListComponent";

const buttonContainersData = [
  {
    workcardNo: "I00-05/2024-2-0-1",
    quantity: "1",
    product: "01 IC 0003201100",
    activity: "BLANKING",
    workstation: "ATPL/p/118",
    order: "IOO-05/2024-2",
    line: "Inter Cooler",
    dateShift: "02/Jun/2024-Regular Shift",
    assignedTo: "Ashutosh",
    status: "OPEN",
  },
  {
    workcardNo: "I00-05/2024-2-0-2",
    quantity: "2",
    product: "02 IC 0003201101",
    activity: "BLANKING",
    workstation: "ATPL/p/119",
    order: "IOO-05/2024-3",
    line: "Heat Exchanger",
    dateShift: "03/Jun/2024-Night Shift",
    assignedTo: "Rahul",
    status: "IN PROGRESS",
  },
  {
    workcardNo: "I00-05/2024-2-0-3",
    quantity: "3",
    product: "03 IC 0003201102",
    activity: "BLANKING",
    workstation: "ATPL/p/120",
    order: "IOO-05/2024-4",
    line: "Radiator",
    dateShift: "04/Jun/2024-Regular Shift",
    assignedTo: "Vijay",
    status: "PENDING",
  },
  {
    workcardNo: "I00-05/2024-2-0-4",
    quantity: "4",
    product: "04 IC 0003201103",
    activity: "BLANKING",
    workstation: "ATPL/p/121",
    order: "IOO-05/2024-5",
    line: "Oil Cooler",
    dateShift: "05/Jun/2024-Regular Shift",
    assignedTo: "Rohit",
    status: "COMPLETED",
  },
  {
    workcardNo: "I00-05/2024-2-0-5",
    quantity: "5",
    product: "05 IC 0003201104",
    activity: "BLANKING",
    workstation: "ATPL/p/122",
    order: "IOO-05/2024-6",
    line: "Condenser",
    dateShift: "06/Jun/2024-Night Shift",
    assignedTo: "Anil",
    status: "OPEN",
  },
];

const ActiveWorkCards = () => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  const handleLoginPress1 = () => {
    navigation.navigate("WorkCardParameters");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <DashboardComponent name="Active Work Cards" />
      </View>
      <View style={styles.separator} />
      <View style={styles.container}>
        <WorkCardListComponent
          name="Work card list for Activity:"
          value="BLANKING"
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {buttonContainersData.map((data, index) => (
          <View style={styles.buttonContainer} key={index}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                Workcard No: {data.workcardNo}
              </Text>
              <Text style={styles.buttonText}>Quantity: {data.quantity}</Text>
              <Text style={styles.buttonText}>Product: {data.product}</Text>
              <Text style={styles.buttonText}>Activity: {data.activity}</Text>
              <Text style={styles.buttonText}>
                Workstation: {data.workstation}
              </Text>
              <Text style={styles.buttonText}>Order: {data.order}</Text>
              <Text style={styles.buttonText}>Line: {data.line}</Text>
              <Text style={styles.buttonText}>
                Date/Shift: {data.dateShift}
              </Text>
              <Text style={styles.buttonText}>
                Assigned To: {data.assignedTo}
              </Text>
              <Text style={styles.buttonText}>Status: {data.status}</Text>
              <View style={styles.buttonsWrapper}>
                <TouchableOpacity
                  onPress={handleLoginPress1}
                  style={styles.viewWorkcardButton}
                >
                  <Text style={{ color: "white" }}>
                    View Process Parameters
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActiveWorkCards;

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
  },
  buttonContainer: {
    width: "100%",
    //paddingHorizontal: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#28C6E3",
    padding: 15,
    // borderRadius: 10,
    //marginBottom: 10,
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

  separator: {
    height: 1,
    marginVertical: 1,
  },
  viewWorkcardButton: {
    backgroundColor: "#E24427",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: "center",
  },
});
