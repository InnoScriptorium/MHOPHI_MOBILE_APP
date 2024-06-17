import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const DashboardComponent = ({ name, onToggleSidebar }) => {
  const { width } = useWindowDimensions();
  const [screenOrientation, setScreenOrientation] = useState("portrait");

  useEffect(() => {
    const getOrientation = () => {
      const { width, height } = Dimensions.get("window");
      if (width < height) {
        setScreenOrientation("portrait");
      } else {
        setScreenOrientation("landscape");
      }
    };

    const subscription = Dimensions.addEventListener("change", getOrientation);

    // Call getOrientation once to set the initial orientation
    getOrientation();

    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <View style={[styles.container, { width }]}>
      <TouchableOpacity style={styles.menuButton} onPress={onToggleSidebar}>
        <FontAwesome name="bars" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text
          style={[
            styles.title,
            {
              fontSize:
                screenOrientation === "portrait" ? width * 0.06 : width * 0.04,
            },
          ]}
        >
          {name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#16AEC5",
    height: 60,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    textAlign: "left",
  },
  menuButton: {
    justifyContent: "center",
    marginRight: 20,
  },
});

export default DashboardComponent;
