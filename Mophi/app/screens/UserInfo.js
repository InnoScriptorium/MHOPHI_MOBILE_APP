import DashboardComponent from "../components/DashboardComponent";
import React from "react";
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
import { AntDesign } from '@expo/vector-icons';

const UserInfo = () => {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;
    const navigation = useNavigation();

    
    const handleLoginPress = () => {
        navigation.navigate("Login");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    <DashboardComponent name="" />
                </View>
                <View style={styles.separator} />
                <View style={styles.assignmentContainer}>
                    <Text style={styles.textContainer}>Ashutosh</Text>
                    <Text style={styles.textContainer}>10043</Text>
                    <Text style={styles.textContainer}>IOO Labs Private Ltd</Text>
                    <Text style={styles.textContainer}>Sheet Mill</Text>
                </View>
                <View style={styles.separator} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button1} >
                        <View style={styles.buttonContent}>
                            <Text style={styles.buttonText}>Change Password</Text>
                        </View>
                        <TouchableOpacity >
                            <AntDesign name="right" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.separator} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button1} >
                        <View style={styles.buttonContent}>
                            <Text style={styles.buttonText}>Notification Settings</Text>
                        </View>
                        <TouchableOpacity>
                            <AntDesign name="right" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.separator} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button1} >
                        <View style={styles.buttonContent}>
                            <Text style={styles.buttonText}>Terms of Services</Text>
                        </View>
                        <TouchableOpacity >
                            <AntDesign name="right" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.separator} />
                <View style={styles.buttonContainer1}>
                    <TouchableOpacity style={styles.button2} onPress={handleLoginPress}>
                        <Text style={styles.buttonText}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default UserInfo;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'flex-start', 
    },

    assignmentContainer: {
        alignItems: "center",
        backgroundColor: "#6AE228",
        padding: 20,
        justifyContent: "center",
        marginBottom: 10, 
        marginHorizontal: 10, 
    },
    textContainer: {
        fontWeight: "bold",
        color: "white",
        fontSize: 18,
        marginBottom: 10,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 5,
        alignItems: 'center', 
    },
    buttonContainer1: {
        width: '30%', 
        alignSelf: 'center', 
        marginVertical: 5,
    },
    button1: {
        backgroundColor: "#28C6E3",
        paddingVertical: 15, 
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '100%',
        alignItems: 'left',
        flexDirection: 'row',
        justifyContent: 'space-between', 
    },
    button2: {
        backgroundColor: "#E24427",
        paddingVertical: 10, 
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center', 
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    buttonContent: {
        flexDirection: 'row', 
        alignItems: 'center', 
    },
    separator: {
        height: 1,
        marginVertical: 5,
    },
});
