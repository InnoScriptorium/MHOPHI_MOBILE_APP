import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleLoginPress = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <Image
          source={require("../assets/mhophi_image.jpeg")}
          style={styles.image}
        />
        <Text style={styles.text}>Get Started</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingContainer}
        >
          <View style={styles.textContainer}>
            <TextInput
              style={styles.input}
              placeholder="Employee ID"
              onFocus={() => {}}
            />
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Password"
                secureTextEntry={secureTextEntry}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={togglePasswordVisibility}
              >
                <MaterialIcons
                  name={secureTextEntry ? "visibility-off" : "visibility"}
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: 510,
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  text: {
    padding: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  input: {
    height: 70,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "purple",
    fontWeight: "bold",
    fontSize: 18,
  },
});
