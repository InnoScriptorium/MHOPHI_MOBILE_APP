import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";
import DashboardComponent from "../components/DashboardComponent";

const QRCodeScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scannedData, setScannedData] = useState("");
  const [scannerVisible, setScannerVisible] = useState(false);
  const [flashlight, setFlashlight] = useState(false);
  const [cameraType, setCameraType] = useState(
    BarCodeScanner.Constants.Type.back
  );

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScannedData(data);
    setScannerVisible(false);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  const toggleFlashlight = () => {
    setFlashlight(!flashlight);
  };

  const toggleCameraType = () => {
    setCameraType(
      cameraType === BarCodeScanner.Constants.Type.back
        ? BarCodeScanner.Constants.Type.front
        : BarCodeScanner.Constants.Type.back
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <DashboardComponent name="QR Code" />

      <View style={styles.container}>
        <Text style={styles.promptText}>Click to start scanning</Text>

        <TouchableOpacity onPress={() => setScannerVisible(true)}>
          <MaterialIcons name="qr-code-scanner" size={90} color="#16AEC5" />
        </TouchableOpacity>
      </View>

      {scannedData !== "" && (
        <View style={styles.scannedDataContainer}>
          <Text style={styles.scannedDataText}>Scanned Data:</Text>
          <Text style={styles.scannedDataText}>{scannedData}</Text>
        </View>
      )}

      {scannerVisible && (
        <View style={StyleSheet.absoluteFillObject}>
          <BarCodeScanner
            onBarCodeScanned={handleBarCodeScanned}
            type={cameraType}
            torchMode={flashlight ? "on" : "off"}
            style={StyleSheet.absoluteFillObject}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => setScannerVisible(false)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleFlashlight} style={styles.button}>
              <Text style={styles.buttonText}>
                {flashlight ? "Flash Off" : "Flash On"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleCameraType} style={styles.button}>
              <Text style={styles.buttonText}>Rotate Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default QRCodeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#f0f0f0",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  promptText: {
    fontWeight: "bold",
    color: "#333333",
    fontSize: 18,
    marginBottom: 20,
  },
  scannedDataContainer: {
    padding: 20,
    margin: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  scannedDataText: {
    fontWeight: "bold",
    color: "#333333",
    fontSize: 16,
    marginTop: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  button: {
    backgroundColor: "#16AEC5",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
