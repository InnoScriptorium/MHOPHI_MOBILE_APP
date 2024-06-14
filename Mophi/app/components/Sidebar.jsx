import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
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

const Sidebar = () => {
  const window = Dimensions.get("window");
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate("UserInfo");
  };
  const handleLoginPress1 = () => {
    navigation.navigate("Dashboard");
  };
  const handleLoginPress2 = () => {
    navigation.navigate("ActWork");
  };
  const handleLoginPress3 = () => {
    navigation.navigate("ProcessParameters");
  };
  const handleLoginPress4 = () => {
    navigation.navigate("RecordGoods");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconTextContainer}>
        <MaterialIcons name="person" size={30} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.sidebarText}>Ashutosh</Text>
          <Text style={styles.sidebarText}>Production Worker</Text>
        </View>
        <TouchableOpacity onPress={handleLoginPress}>
          <AntDesign
            name="right"
            size={30}
            color="black"
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      <View style={styles.iconTextContainer}>
        <MaterialIcons name="dashboard" size={24} color="black" />
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={handleLoginPress1}>
            <Text style={styles.sidebarText}>Dashboard</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator1} />
      <View style={styles.iconTextContainer}>
        <Fontisto name="persons" size={24} color="black" />
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={handleLoginPress2}>
            <Text style={styles.sidebarText}>Record Production</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator1} />
      <View style={styles.iconTextContainer}>
        <FontAwesome6 name="temperature-empty" size={24} color="black" />
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={handleLoginPress3}>
            <Text style={styles.sidebarText}>Record Process Parameters</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator1} />
      <View style={styles.iconTextContainer}>
        <FontAwesome6 name="inbox" size={24} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.sidebarText}>Material Status</Text>
        </View>
      </View>
      <View style={styles.separator1} />
      <View style={styles.iconTextContainer}>
        <MaterialIcons name="move-down" size={24} color="black" />
        <View style={styles.textContainer}>
          <TouchableOpacity onPress={handleLoginPress4}>
            <Text style={styles.sidebarText}>Record Goods Movement</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.separator1} />
      <View style={styles.iconTextContainer}>
        <MaterialIcons name="receipt-long" size={24} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.sidebarText}>Record Goods Receipt</Text>
        </View>
      </View>
      <View style={styles.separator1} />
      <View style={styles.iconTextContainer}>
        <MaterialCommunityIcons name="check-decagram" size={24} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.sidebarText}>Quality Checks</Text>
        </View>
      </View>
      <View style={styles.separator1} />
      <View style={styles.iconTextContainer}>
        <Entypo name="cross" size={24} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.sidebarText}>Reject Checks</Text>
        </View>
      </View>
      <View style={styles.separator1} />
      <View style={styles.iconTextContainer}>
        <AntDesign name="poweroff" size={24} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.sidebarText}>Breakdown and Startup</Text>
        </View>
      </View>
      <View style={styles.separator1} />
      <View style={styles.iconTextContainer}>
        <MaterialIcons name="report-problem" size={24} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.sidebarText}>Report Issue</Text>
        </View>
      </View>
      <View style={styles.separator1} />
      <View style={styles.iconTextContainer}>
        <MaterialIcons name="report" size={24} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.sidebarText}>Material Risk</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.textContainer}>
        <Text style={styles.sidebarText}>My Activities</Text>
      </View>
      <View style={styles.separator1} />
      <View style={styles.textContainer}>
        <Text style={styles.sidebarText}>My Assignments</Text>
      </View>
      <View style={styles.separator1} />
      <View style={styles.textContainer}>
        <Text style={styles.sidebarText}>My Work Cards</Text>
      </View>
      <View style={styles.separator1} />
      <View style={styles.textContainer}>
        <Text style={styles.sidebarText}>My Performance</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.iconTextContainer}>
        <Feather name="log-out" size={24} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.sidebarText}>Log out</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    padding: 10,
    width: Dimensions.get("window").width < 600 ? "80%" : "30%",
    maxWidth: 300,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 10,
    marginRight: 40, // Add space between text and right icon
  },
  sidebarText: {
    color: "#333",
    fontSize: 18,
  },
  rightIcon: {
    marginLeft: 10, // Optional: add additional margin to the right icon if needed
  },
  separator: {
    height: 2,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
  separator1: {
    height: 1,
    // backgroundColor: "#ddd",
    marginVertical: 7,
  },
});

export default Sidebar;
