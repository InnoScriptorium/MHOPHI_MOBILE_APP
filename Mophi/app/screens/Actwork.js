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

const ActWork = () => {
  const navigation = useNavigation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleQRCodeScan = () => {
    navigation.navigate("QRCodeScreen");
  };

  const handleViewCard = () => {
    navigation.navigate("WorkCardDet");
  };

  const workCards = [
    {
      workcardNo: "I00-05/2024-1-4-1",
      quantity: "1",
      product: "01 IC 0007701000",
      activity: "SEMI AUTO CORE ASSY",
      workstation: "ATPL/SPM/99",
      order: "IOO-05/2024-2",
      line: "Inter Cooler",
      dateShift: "17/Jun/2024-Regular Shift",
      assignedTo: "Ashutosh",
      status: "OPEN",
    },
    {
      workcardNo: "I00-05/2024-1-4-2",
      quantity: "1",
      product: "01 IC 0007701000",
      activity: "SEMI AUTO CORE ASSY",
      workstation: "ATPL/SPM/99",
      order: "IOO-05/2024-2",
      line: "Inter Cooler",
      dateShift: "17/Jun/2024-Regular Shift",
      assignedTo: "Ashutosh",
      status: "OPEN",
    },
    {
      workcardNo: "I00-05/2024-1-4-3",
      quantity: "1",
      product: "01 IC 0007701000",
      activity: "SEMI AUTO CORE ASSY",
      workstation: "ATPL/SPM/99",
      order: "IOO-05/2024-2",
      line: "Inter Cooler",
      dateShift: "17/Jun/2024-Regular Shift",
      assignedTo: "Ashutosh",
      status: "OPEN",
    },
    {
      workcardNo: "I00-05/2024-1-4-4",
      quantity: "1",
      product: "01 IC 0007701000",
      activity: "SEMI AUTO CORE ASSY",
      workstation: "ATPL/SPM/99",
      order: "IOO-05/2024-2",
      line: "Inter Cooler",
      dateShift: "17/Jun/2024-Regular Shift",
      assignedTo: "Ashutosh",
      status: "OPEN",
    },
    {
      workcardNo: "I00-05/2024-1-4-5",
      quantity: "1",
      product: "01 IC 0007701000",
      activity: "SEMI AUTO CORE ASSY",
      workstation: "ATPL/SPM/99",
      order: "IOO-05/2024-2",
      line: "Inter Cooler",
      dateShift: "17/Jun/2024-Regular Shift",
      assignedTo: "Ashutosh",
      status: "OPEN",
    },
    {
      workcardNo: "I00-05/2024-1-4-6",
      quantity: "1",
      product: "01 IC 0007701000",
      activity: "SEMI AUTO CORE ASSY",
      workstation: "ATPL/SPM/99",
      order: "IOO-05/2024-2",
      line: "Inter Cooler",
      dateShift: "17/Jun/2024-Regular Shift",
      assignedTo: "Ashutosh",
      status: "OPEN",
    },
    {
      workcardNo: "I00-05/2024-1-4-7",
      quantity: "1",
      product: "01 IC 0007701000",
      activity: "SEMI AUTO CORE ASSY",
      workstation: "ATPL/SPM/99",
      order: "IOO-05/2024-2",
      line: "Inter Cooler",
      dateShift: "17/Jun/2024-Regular Shift",
      assignedTo: "Ashutosh",
      status: "OPEN",
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        backgroundColor="#0000004D"
        barStyle="light-content"
        translucent={true}
      />
      <DashboardComponent
        name="Active Work Cards"
        onToggleSidebar={handleToggleSidebar}
      />
      <ScrollView style={styles.content}>
        <View style={styles.headerContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeMessage}>Work card list for</Text>
            <Text style={styles.welcomeMessage}>Ashutosh</Text>
          </View>
          <TouchableOpacity
            style={styles.scanButton}
            onPress={handleQRCodeScan}
          >
            <Text style={styles.scanButtonText}>Scan</Text>
          </TouchableOpacity>
        </View>
        {workCards.map((card) => (
          <View key={card.workcardNo} style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{card.workcardNo}</Text>
            <Text
              style={styles.cardDescription}
            >{`Product: ${card.product}`}</Text>
            <Text
              style={styles.cardDescription}
            >{`Activity: ${card.activity}`}</Text>
            <Text
              style={styles.cardDescription}
            >{`Workstation: ${card.workstation}`}</Text>
            <Text style={styles.cardDescription}>{`Order: ${card.order}`}</Text>
            <Text style={styles.cardDescription}>{`Line: ${card.line}`}</Text>
            <Text
              style={styles.cardDescription}
            >{`Date/Shift: ${card.dateShift}`}</Text>
            <Text
              style={styles.cardDescription}
            >{`Assigned To: ${card.assignedTo}`}</Text>
            <Text
              style={styles.cardDescription}
            >{`Status: ${card.status}`}</Text>
            <TouchableOpacity
              style={styles.cardButton}
              onPress={handleViewCard}
            >
              <Text style={styles.cardButtonText}>View Card</Text>
            </TouchableOpacity>
          </View>
        ))}
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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    paddingVertical: 15,
    paddingHorizontal: 20,
    margin: 5,
  },
  welcomeContainer: {
    flex: 1,
  },
  welcomeMessage: {
    fontSize: 25,
    fontStyle: "italic",
    color: "#333333",
    textAlign: "left",
  },
  scanButton: {
    backgroundColor: "#16AEC5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  scanButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  cardContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 10,
    elevation: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
    color: "#333333",
    marginBottom: 5,
  },
  cardButton: {
    backgroundColor: "#16AEC5",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center",
  },
  cardButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  sidebarContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: width * 0.7,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default ActWork;
