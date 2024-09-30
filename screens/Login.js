import React, { useState } from "react";
import ViewPropTypes from 'deprecated-react-native-prop-types';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    TouchableOpacity,
    TextInput,
    Image,
} from "react-native";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";
// import Feather from 'react-native-vector-icons/Feather';
// import Feather from 'react-native-vector-icons/Feather';
import { Feather } from "@expo/vector-icons";

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [usernameMessage, setUsernameMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    // const navigation = useNavigation();
    const handleLogin = async () => {
        try {
            const response = await axios.get(
                `http://192.168.100.45:3000/Tb_user/?username=${username}&password=${password}`
            );
            if (username === "" || password === "") {
                setUsernameMessage("Vui lòng không để trống tài khoản");
                setPasswordMessage("Vui lòng không để trống mật khẩu");
            } else {
                setUsernameMessage("");
                setPasswordMessage("");
                if (response.data.length > 0) {
                    // Đăng nhập thành công
                    Alert.alert("Đăng nhập thành công");

                    navigation.navigate("Thế giới truyện");
                } else {
                    // Đăng nhập thất bại
                    Alert.alert(
                        "Đăng nhập thất bại",
                        "Sai tài khoản hoặc mật khẩu"
                    );
                }
            }
        } catch (error) {
            if (error.response) {
                // Xử lý lỗi từ máy chủ (ví dụ: lỗi 404, 500, ...)
                console.error("Server error:", error.response.status);
                Alert.alert("Server Error", "An error occurred on the server.");
            } else if (error.request) {
                // Xử lý lỗi mạng (ví dụ: không thể kết nối)
                console.error("Network error:", error.request);
                Alert.alert(
                    "Network Error",
                    "Unable to connect to the server."
                );
            } else {
                // Xử lý lỗi khác (ví dụ: lỗi cú pháp JSON)
                console.error("Error:", error.message);
                Alert.alert("Error", "An error occurred.");
            }
        }
    };
    const handleRegister = () => {
        // Chuyển hướng tới màn hình đăng kí
        navigation.navigate("Dangki");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textheader}>THẾ GIỚI TRUYỆN</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.textFooter}>Tài khoản :</Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={20} />
                    <TextInput
                        placeholder="nhập tài khoản"
                        onChangeText={(text) => {
                            setUsername(text);
                            setUsernameMessage(
                                text ? "" : "Vui lòng không để trống tài khoản"
                            );
                        }}
                        style={styles.Textinput}
                        autoCapitalize="none"
                    />
                    {username ? (
                        <Feather name="check-circle" color="green" size={20} />
                    ) : null}
                </View>
                <Text style={styles.message}>{usernameMessage}</Text>

                <Text
                    style={{
                        marginTop: 10,
                    }}
                ></Text>
                <Text style={styles.textFooter}>Mật khẩu : </Text>

                <View style={styles.action}>
                    <FontAwesome name="lock" color="#05375a" size={20} />
                    <TextInput
                        placeholder="nhập mật khẩu"
                        onChangeText={(text) => setPassword(text)}
                        style={styles.Textinput}
                        secureTextEntry={!isPasswordVisible}
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        onPress={() => setIsPasswordVisible((prev) => !prev)}
                    >
                        <Feather
                            name={isPasswordVisible ? "eye" : "eye-off"}
                            color={isPasswordVisible ? "gray" : "#009387"}
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.message}>{passwordMessage}</Text>

                <Text style={{ marginTop: 20 }}></Text>
                {/*BUTTON ĐANG NHAP DANG KI */}
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={handleLogin}
                    >
                        <Text style={styles.textSign}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <Text style={{marginTop:30}} >Bạn chưa có tài khoản?</Text>
                    <TouchableOpacity onPress={handleRegister}>
                        <Text style={styles.textRegister}>Đăng Kí Ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFD700",
    
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 70,
    },
    footer: {
        flex: 4,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    textheader: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    },
    textFooter: {
        color: "black",
        fontWeight: "bold",
        fontSize: 16,
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5,
    },
    Textinput: {
        flex: 1,
        paddingLeft: 10,
        color: "#05375a",
    },
    button: {
        alignItems: "center",
        marginTop: 10,
        marginTop:10,
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 9999,
        //backgroundColor: '#08d4c4', // Adding background color
        backgroundColor: "#FF9966",
    },
    textSign: {
        color: "white", // Changing text color to white
        fontWeight: "bold",
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 20,
        
    },
    textRegister: {
        textDecorationLine: "underline",
        color: "blue",
        marginTop:5,
    },

    message: {
        color: "red",
        fontSize: 12,
        marginTop: 5,
    },
});

export default Login;
