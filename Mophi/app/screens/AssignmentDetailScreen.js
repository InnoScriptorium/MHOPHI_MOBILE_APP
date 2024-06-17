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

const AssignmentDetailScreen = () => {
  const navigation = useNavigation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showProductionSummary, setShowProductionSummary] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleQRCodeScan = () => {
    navigation.navigate("QRCodeScreen");
  };

  const handleShowProductionSummary = () => {
    setShowProductionSummary(true);
  };

  const renderProductionSummary = () => {
    if (!showProductionSummary) return null;

    return (
      <View style={styles.productionSummaryContainer}>
        <Text style={styles.sectionTitle}>Production Summary</Text>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Text style={styles.cardText}>Assigned Cards</Text>
            <Text style={styles.cardNumber}>34</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Completed Cards</Text>
            <Text style={styles.cardNumber}>87</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardText}>Delayed Cards</Text>
            <Text style={styles.cardNumber}>67</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.showSummaryButton}
          onPress={() => navigation.navigate("ActWork")}
        >
          <Text style={styles.buttonText}>Show Work Cards</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#0000004D"
        barStyle="light-content"
        translucent={true}
      />
      <DashboardComponent
        name="Assignment Detail"
        onToggleSidebar={handleToggleSidebar}
      />
      <ScrollView style={styles.content}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeMessage}>Assignment Details For:</Text>
          <Text style={styles.welcomeMessage}>Ashutosh</Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Assignment Details</Text>
          <View style={styles.assignmentDetailsContainer}>
            {[
              { label: "Date:", value: "17-06-2024" },
              { label: "Shift:", value: "Regular Shift" },
              { label: "Department:", value: "Assembly" },
              { label: "Activity:", value: "SEMI AUTO CORE ASSY" },
              { label: "Workstation:", value: "ATPL/SPM/99" },
              { label: "Skill:", value: "Assembling" },
              { label: "Attendance status:", value: "Present" },
            ].map((item, index) => (
              <View key={index} style={styles.assignmentDetailRow}>
                <Text style={styles.assignmentDetailLabel}>{item.label}</Text>
                <Text style={styles.assignmentDetailValue}>{item.value}</Text>
              </View>
            ))}

            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleQRCodeScan}
              >
                <Text style={styles.buttonText}>Scan QR Code</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={handleShowProductionSummary}
              >
                <Text style={styles.buttonText}>Show Production Summary</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {renderProductionSummary()}
      </ScrollView>
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
  content: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  welcomeContainer: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 5,
    alignItems: "center",
  },
  welcomeMessage: {
    fontSize: 25,
    fontStyle: "italic",
    color: "#333333",
    textAlign: "center",
  },
  sectionContainer: {
    padding: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  assignmentDetailsContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 10,
    elevation: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  assignmentDetailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  assignmentDetailLabel: {
    fontSize: 16,
    color: "#333333",
  },
  assignmentDetailValue: {
    fontSize: 16,
    color: "#333333",
  },
  buttonsContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#16AEC5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "80%",
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  productionSummaryContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 10,
    elevation: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardNumber: {
    fontSize: 20,
    color: "#333333",
    textAlign: "center",
    marginTop: 5,
  },
  showSummaryButton: {
    backgroundColor: "#16AEC5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 10,
  },
  sidebarContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: width * 0.7,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default AssignmentDetailScreen;
