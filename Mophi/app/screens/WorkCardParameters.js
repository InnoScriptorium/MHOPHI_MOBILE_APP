import DashboardComponent from "../components/DashboardComponent";
import React, { useState } from "react";
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
import BottomBarComponent from "../components/BottomBarComponent";
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';

const WorkCardParameters = () => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleLoginPress1 = () => {
    navigation.navigate("ProcessParameters");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <DashboardComponent name="Workcard Parameters" />
      </View>
      <View style={styles.separator} />
      <View style={styles.container}>
        <WorkCardListComponent
          name="Parameters for Workcard:"
          value="IOO-05/2024-2-0-1"
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.row}>
          <Text style={styles.text}>
            The punching size of composite header is within tolerance limit
          </Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="Select" value="option1" />
              <Picker.Item label="YES" value="option2" />
              <Picker.Item label="NO" value="option3" />
            </Picker>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLoginPress1}>
          <AntDesign name="check" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomBarComponent size="2" />
    </SafeAreaView>
  );
};

export default WorkCardParameters;

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
  separator: {
    height: 1,
    marginVertical: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    flexShrink: 1,
    marginRight: 10,
    fontWeight:"bold"
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    marginRight: 10,
  },
  picker: {
    height: 50,
    width: 150,
  },
  button: {
    backgroundColor: "#E24427",
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
 