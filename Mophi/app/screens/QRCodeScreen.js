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
  const [scanned, setScanned] = useState(false);
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
    setScanned(true);
    setScannedData(data);
    setScannerVisible(false); // Hide scanner after successful scan
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
      <View style={styles.separator} />
      <View style={styles.assignmentContainer}>
        <Text style={styles.textContainer}>Click to start scanning</Text>
        <View style={styles.separator} />
        <TouchableOpacity onPress={() => setScannerVisible(true)}>
          <MaterialIcons name="qr-code-scanner" size={90} color="#E24427" />
        </TouchableOpacity>
        {scannedData ? (
          <Text style={styles.textContainer}>Scanned Data: {scannedData}</Text>
        ) : null}
      </View>
      {scannerVisible && (
        <View style={StyleSheet.absoluteFillObject}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
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
  },
  assignmentContainer: {
    alignItems: "center",
    backgroundColor: "#6AE228",
    padding: 10,
    height: 150,
  },
  textContainer: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },
  separator: {
    height: 1,
    marginVertical: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  button: {
    backgroundColor: "#E24427",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
