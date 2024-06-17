import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Sidebar from "../components/Sidebar";
import { useNavigation } from "@react-navigation/native";
import DashboardComponent from "../components/DashboardComponent";

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleAssignmentDetail = () => {
    navigation.navigate("AssignmentDetail");
  };

  const orderSummaries = [
    {
      orderNo: "IOO-05/2024-2",
      quantity: 500,
      "WIP%": 25.0,
      "complete%": 0.0,
      "pending%": 75.0,
    },
    {
      orderNo: "IOO-06/2024-3",
      quantity: 300,
      "WIP%": 50.0,
      "complete%": 10.0,
      "pending%": 40.0,
    },
    {
      orderNo: "IOO-07/2024-4",
      quantity: 700,
      "WIP%": 30.0,
      "complete%": 20.0,
      "pending%": 50.0,
    },
    {
      orderNo: "IOO-08/2024-5",
      quantity: 400,
      "WIP%": 40.0,
      "complete%": 30.0,
      "pending%": 30.0,
    },
  ];

  const workCardSummaries = [
    { id: 1, title: "Active Cards", count: 898 },
    { id: 2, title: "Complete Cards", count: 3 },
    { id: 3, title: "Pending Cards", count: 1896 },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#0000004D"
        barStyle="light-content"
        translucent={true}
      />
      <DashboardComponent
        name="Dashboard"
        onToggleSidebar={handleToggleSidebar}
      />

      <ScrollView style={styles.content}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.name}>Hello Ashutosh</Text>
          <Text style={styles.welcomeMessage}>
            Welcome back! Here is the order summary and work card summary for
            your organization.
          </Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.cardContainer}>
            {orderSummaries.map((order, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.cardText}>Order No: {order.orderNo}</Text>
                <Text style={styles.cardText}>Quantity: {order.quantity}</Text>
                <Text style={styles.cardText}>WIP%: {order["WIP%"]}%</Text>
                <Text style={styles.cardText}>
                  Complete%: {order["complete%"]}%
                </Text>
                <Text style={styles.cardText}>
                  Pending%: {order["pending%"]}%
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Work Card Summary</Text>
          <View style={styles.workCardContainer}>
            {workCardSummaries.map((workCard, index) => (
              <View
                key={workCard.id}
                style={[
                  styles.workCard,
                  index % 3 !== 0 ? styles.workCardMarginLeft : null,
                ]}
              >
                <Text style={styles.workCardTitle}>{workCard.title}</Text>
                <Text style={styles.workCardDescription}>{workCard.count}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleAssignmentDetail}
        >
          <Text style={styles.buttonText}>Go To My Assignment</Text>
        </TouchableOpacity>
      </View>

      {isSidebarOpen && (
        <View style={styles.sidebarContainer}>
          <Sidebar onClose={handleCloseSidebar} />
        </View>
      )}
    </SafeAreaView>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#16AEC5",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  welcomeContainer: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginBottom: 10,
  },
  welcomeMessage: {
    fontSize: 15,
    fontStyle: "italic",
    color: "#333333",
    textAlign: "center",
  },
  content: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  sidebarContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: width * 0.7,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  sectionContainer: {
    padding: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    aspectRatio: 1.3,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 5,
  },
  workCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  workCard: {
    width: "30%",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  workCardMarginLeft: {
    marginLeft: "3%",
  },
  workCardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  workCardDescription: {
    fontSize: 14,
    textAlign: "center",
  },
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#16AEC5",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
  },
});

export default DashboardScreen;
