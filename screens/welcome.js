import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Alert,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from "react-native";
import axios from "axios";
// import Dangki from './Dangki';
// import Login from './Login';
import imageBackground from "../assets/12.png";

const Welcome = ({ navigation }) => {
    const handlelogin = () => {
        // Chuyển hướng tới màn hình đăng nhập
        navigation.navigate("Login");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("../assets/13.png")}
                    style={styles.logo}
                />
                <Text></Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>
                    Chào mừng các đọc giả đến với thế giới đọc truyện
                </Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={handlelogin}>
                        <View style={styles.signIn}>
                            <Text style={styles.textSign}>LOGIN</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.2;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFD700",
    },
    header: {
        flex: 2,
        backgroundColor: "#FFD700",
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    logo: {
        width: height_logo + 105,
        height: height_logo + 195,
    },
    title: {
        color: "#05375a",
        fontSize: 30,
        fontWeight: "bold",
        
    },
    text: {
        color: "grey",
        marginTop: 5,
    },
    button: {
        alignItems: "flex-end",
        marginTop: 30,
        borderRadius: 20,
        overflow: "scroll",
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        flexDirection: "row",
        backgroundColor: "#FF9966",
    },
    textSign: {
        color: "black",
        fontWeight: "bold",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
});

export default Welcome;
