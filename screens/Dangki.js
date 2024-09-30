import React, { useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert,
    Image
} from "react-native";
import axios from "axios";

const Dangki = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const handleRegister = async () => {
        try {
            if (!username || !password) {
                Alert.alert("Lỗi", "Vui lòng nhập tài khoản và mật khẩu.");
                return;
            }

            // Gửi yêu cầu đăng ký lên server
            const response = await axios.post(
                "http://192.168.100.45:3000/Tb_user",
                {
                    username,
                    password,
                }
            );

            // Xử lý kết quả từ server
            if (response.data) {
                Alert.alert(
                    "Thông báo",
                    "Tài khoản đã được đăng kí thành công"
                );
                navigation.goBack(); // Quay lại màn hình đăng nhập sau khi đăng ký thành công
            } else {
                Alert.alert(
                    "Thông báo",
                    "Đăng kí thất bại. Vui lòng thử lại sau."
                );
            }
        } catch (error) {
            console.error("Lỗi đăng kí:", error.message);
            Alert.alert("Lỗi", "Đã xảy ra lỗi khi đăng kí.");
        }
    };

    return (
        <View style={{ width:'100%', height:'100%', backgroundColor:'orange',}}>
          <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/left.png")} style={{ height: 25, width: 25, marginLeft: 15, marginTop: 27 }} />
        </TouchableOpacity>
            <Text style={{ marginTop:80,height:170,fontSize:20,marginLeft:110,width:70}}>Đăng Kí</Text>
            </View>
        <View style={styles.container}>
            <Text >Đăng kí tài khoản</Text>
            <TextInput
                style={styles.input}
                placeholder="Nhập tài khoản"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Nhập mật khẩu"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Đăng kí</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
          
        backgroundColor: "white",
    },
    title: {
        fontSize: 25,
        marginBottom: 20,
        textAlign: "center",
        fontWeight: "bold",
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 23,
        padding: 10,
        borderRadius: 8,
        marginTop:10
    },
    button: {
        backgroundColor: "#ff9d00",
        padding: 15,
        alignItems: "center",
        borderRadius: 8,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default Dangki;
