import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import Constants from "expo-constants";
import DashboardComponent from "../components/DashboardComponent";

const WorkToStore = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <DashboardComponent name={"RecordGoodsMovement"} />
      <View style={styles.sectionContainer}>
        <View style={styles.rowButton}>
          <TouchableOpacity style={styles.sButton}>
            <Text style={styles.sButtonText}>S1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sButton}>
            <Text style={styles.sButtonText}>S2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sButton}>
            <Text style={styles.sButtonText}>S3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.s4Button}>
            <Text style={styles.sButtonText}>S4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sButton}>
            <Text style={styles.sButtonText}>S5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sButton}>
            <Text style={styles.sButtonText}>S6</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionText}>Select Source Workstation</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/10</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/11</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/110</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/112</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/117</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/118</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/119</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/120</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/121</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/122</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/123</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/129</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/15</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/18</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/19</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/20</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/21</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/22</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/23</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/26</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/27</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/80</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/85</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/86</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/87</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/88</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/89</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/P/95</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/SPM/102</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/SPM/34</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/SPM/35</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/SPM/44</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/SPM/98</Text>
            <Text>&gt;</Text>
          </View>
          <View style={styles.textRow}>
            <Text style={styles.text1text}>ATPL/SPM/99</Text>
            <Text>&gt;</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: "#6AF228",
    height: 100,
    borderBottomColor: "white",
    borderBottomWidth: 5,
    margin: 5,
  },
  safeArea: {
    paddingTop: Constants.statusBarHeight,
  },
  sectionText: {
    color: "white",
    fontSize: 20,
    flex: 1,
    fontWeight: "700",
    textAlign: "center",
  },
  s4Button: {
    backgroundColor: "blue",
    height: 30,
    width: "12.5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

    margin: 7,
  },
  sButton: {
    backgroundColor: "grey",
    height: 30,
    width: "12.5%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

    margin: 7,
  },
  sButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
  },
  rowButton: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  text1text: {
    fontSize: 15,
    fontWeight: "600",
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
    marginVertical: 30,
  },
});

export default WorkToStore;
