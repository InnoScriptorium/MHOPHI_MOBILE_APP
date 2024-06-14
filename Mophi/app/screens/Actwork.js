import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Constants from "expo-constants";
import DashboardComponent from "../components/DashboardComponent";
import React from "react";

const Actwork = () => {
  const navigation = useNavigation();
  const handleLoginPress = () => {
    navigation.navigate("WorkCardDet");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <DashboardComponent name="Active Work Cards" />
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>Work card list for Ashutosh</Text>
        <TouchableOpacity style={styles.scanButton}>
          <Text style={styles.scanButtonText}>Scan</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.cardText}>
              Workcard No:IOO-05/2024-1-3-1 Quantity: 1
            </Text>
            <Text style={styles.cardText}>
              Product: 01C 0007701000 Activity: SEMI AUTO COR
            </Text>
            <Text style={styles.cardText}>
              Workstation: ATPL/SPM/99 Order:IOO-05/2024
            </Text>
            <Text style={styles.cardText}>Line: Inter Cooler</Text>
            <Text style={styles.cardText}>
              Date Shift:01/Jun/2024-Regular Shift
            </Text>
            <Text style={styles.cardText}>
              Assigned To: Parthiban Status: Open
            </Text>
          </View>
          <TouchableOpacity style={styles.showButton}>
            <Text style={styles.showButtonText} onPress={handleLoginPress}>
              View Cards
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.cardText}>
              Workcard No:IOO-05/2024-1-3-1 Quantity: 1
            </Text>
            <Text style={styles.cardText}>
              Product: 01C 0007701000 Activity: SEMI AUTO COR
            </Text>
            <Text style={styles.cardText}>
              Workstation: ATPL/SPM/99 Order:IOO-05/2024
            </Text>
            <Text style={styles.cardText}>Line: Inter Cooler</Text>
            <Text style={styles.cardText}>
              Date Shift:01/Jun/2024-Regular Shift
            </Text>
            <Text style={styles.cardText}>
              Assigned To: Parthiban Status: Open
            </Text>
          </View>
          <TouchableOpacity style={styles.showButton}>
            <Text style={styles.showButtonText} onPress={handleLoginPress}>
              View Cards
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.cardText}>
              Workcard No:IOO-05/2024-1-3-1 Quantity: 1
            </Text>
            <Text style={styles.cardText}>
              Product: 01C 0007701000 Activity: SEMI AUTO COR
            </Text>
            <Text style={styles.cardText}>
              Workstation: ATPL/SPM/99 Order:IOO-05/2024
            </Text>
            <Text style={styles.cardText}>Line: Inter Cooler</Text>
            <Text style={styles.cardText}>
              Date Shift:01/Jun/2024-Regular Shift
            </Text>
            <Text style={styles.cardText}>
              Assigned To: Parthiban Status: Open
            </Text>
          </View>
          <TouchableOpacity style={styles.showButton}>
            <Text style={styles.showButtonText} onPress={handleLoginPress}>
              View Cards
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.cardText}>
              Workcard No:IOO-05/2024-1-3-1 Quantity: 1
            </Text>
            <Text style={styles.cardText}>
              Product: 01C 0007701000 Activity: SEMI AUTO COR
            </Text>
            <Text style={styles.cardText}>
              Workstation: ATPL/SPM/99 Order:IOO-05/2024
            </Text>
            <Text style={styles.cardText}>Line: Inter Cooler</Text>
            <Text style={styles.cardText}>
              Date Shift:01/Jun/2024-Regular Shift
            </Text>
            <Text style={styles.cardText}>
              Assigned To: Parthiban Status: Open
            </Text>
          </View>
          <TouchableOpacity style={styles.showButton}>
            <Text style={styles.showButtonText} onPress={handleLoginPress}>
              View Cards
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.cardText}>
              Workcard No:IOO-05/2024-1-3-1 Quantity: 1
            </Text>
            <Text style={styles.cardText}>
              Product: 01C 0007701000 Activity: SEMI AUTO COR
            </Text>
            <Text style={styles.cardText}>
              Workstation: ATPL/SPM/99 Order:IOO-05/2024
            </Text>
            <Text style={styles.cardText}>Line: Inter Cooler</Text>
            <Text style={styles.cardText}>
              Date Shift:01/Jun/2024-Regular Shift
            </Text>
            <Text style={styles.cardText}>
              Assigned To: Parthiban Status: Open
            </Text>
          </View>
          <TouchableOpacity style={styles.showButton}>
            <Text style={styles.showButtonText} onPress={handleLoginPress}>
              View Cards
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.cardText}>
              Workcard No:IOO-05/2024-1-3-1 Quantity: 1
            </Text>
            <Text style={styles.cardText}>
              Product: 01C 0007701000 Activity: SEMI AUTO COR
            </Text>
            <Text style={styles.cardText}>
              Workstation: ATPL/SPM/99 Order:IOO-05/2024
            </Text>
            <Text style={styles.cardText}>Line: Inter Cooler</Text>
            <Text style={styles.cardText}>
              Date Shift:01/Jun/2024-Regular Shift
            </Text>
            <Text style={styles.cardText}>
              Assigned To: Parthiban Status: Open
            </Text>
          </View>
          <TouchableOpacity style={styles.showButton}>
            <Text style={styles.showButtonText} onPress={handleLoginPress}>
              View Cards
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <View>
            <Text style={styles.cardText}>
              Workcard No:IOO-05/2024-1-3-1 Quantity: 1
            </Text>
            <Text style={styles.cardText}>
              Product: 01C 0007701000 Activity: SEMI AUTO COR
            </Text>
            <Text style={styles.cardText}>
              Workstation: ATPL/SPM/99 Order:IOO-05/2024
            </Text>
            <Text style={styles.cardText}>Line: Inter Cooler</Text>
            <Text style={styles.cardText}>
              Date Shift:01/Jun/2024-Regular Shift
            </Text>
            <Text style={styles.cardText}>
              Assigned To: Parthiban Status: Open
            </Text>
          </View>
          <TouchableOpacity style={styles.showButton}>
            <Text style={styles.showButtonText} onPress={handleLoginPress}>
              View Cards
            </Text>
          </TouchableOpacity>
        </View>
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
    flexDirection: "row",
    flexWrap: "wrap",
    height: 100,
    borderBottomColor: "white",
    borderBottomWidth: 5,
  },
  sectionText: {
    color: "white",
    fontSize: 25,
    flex: 1,
  },
  scanButton: {
    backgroundColor: "red",
    height: 50,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 15,
  },
  scanButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
  cardContainer: {
    backgroundColor: "#28C6E3",
    height: 240,
    borderBottomColor: "white",
    borderBottomWidth: 5,
  },
  cardText: {
    fontSize: 13,
    fontWeight: "700",
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  showButton: {
    backgroundColor: "#6AF228",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    aspectRatio: 4,
    height: 40,
    borderRadius: 10,
    marginHorizontal: 100,
    marginVertical: 5,
  },
  showButtonText: {
    color: "white",
    fontWeight: "800",
  },
});

export default Actwork;
