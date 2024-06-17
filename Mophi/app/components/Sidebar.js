import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Sidebar = ({ onClose }) => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("UserInfo");
    onClose(); // Close sidebar after navigation
  };
  const handleLoginPress1 = () => {
    navigation.navigate("Dashboard");
    onClose(); // Close sidebar after navigation
  };
  const handleLoginPress2 = () => {
    navigation.navigate("ActWork");
    onClose(); // Close sidebar after navigation
  };
  const handleLoginPress3 = () => {
    navigation.navigate("ProcessParameters");
    onClose(); // Close sidebar after navigation
  };
  const handleLoginPress4 = () => {
    navigation.navigate("RecordGoods");
    onClose(); // Close sidebar after navigation
  };

  return (
    <SafeAreaView style={styles.sidebar}>
      <ScrollView>
        <View style={styles.header}>
          <MaterialIcons name="person" size={30} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.sidebarText}>Ashutosh</Text>
            <Text style={styles.sidebarText}>Production Worker</Text>
          </View>
          <TouchableOpacity onPress={handleLoginPress}>
            <AntDesign name="right" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <TouchableOpacity style={styles.menuItem} onPress={handleLoginPress1}>
          <MaterialIcons name="dashboard" size={24} color="black" />
          <Text style={styles.sidebarText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleLoginPress2}>
          <Fontisto name="persons" size={24} color="black" />
          <Text style={styles.sidebarText}>Record Production</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleLoginPress3}>
          <FontAwesome6 name="temperature-empty" size={24} color="black" />
          <Text style={styles.sidebarText}>Record Process Parameters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome6 name="inbox" size={24} color="black" />
          <Text style={styles.sidebarText}>Material Status</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleLoginPress4}>
          <MaterialIcons name="move-down" size={24} color="black" />
          <Text style={styles.sidebarText}>Record Goods Movement</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="receipt-long" size={24} color="black" />
          <Text style={styles.sidebarText}>Record Goods Receipt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialCommunityIcons
            name="check-decagram"
            size={24}
            color="black"
          />
          <Text style={styles.sidebarText}>Quality Checks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Entypo name="cross" size={24} color="black" />
          <Text style={styles.sidebarText}>Reject Checks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <AntDesign name="poweroff" size={24} color="black" />
          <Text style={styles.sidebarText}>Breakdown and Startup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="report-problem" size={24} color="black" />
          <Text style={styles.sidebarText}>Report Issue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <MaterialIcons name="report" size={24} color="black" />
          <Text style={styles.sidebarText}>Material Risk</Text>
        </TouchableOpacity>
        <View style={styles.menuSection}>
          <Text style={styles.sidebarText}>My Activities</Text>
          <Text style={styles.sidebarText}>My Assignments</Text>
          <Text style={styles.sidebarText}>My Work Cards</Text>
          <Text style={styles.sidebarText}>My Performance</Text>
        </View>
        <TouchableOpacity style={styles.menuItem}>
          <Feather name="log-out" size={24} color="black" />
          <Text style={styles.sidebarText}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: Dimensions.get("window").width * 0.7, // Adjust width as needed
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
    elevation: 8, // Android elevation for shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  sidebarText: {
    color: "black",
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  menuSection: {
    paddingHorizontal: 10,
  },
});

export default Sidebar;
