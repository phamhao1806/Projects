import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import axios from "axios";
import Swiper from 'react-native-swiper';
//import Tttruyen from "./dstruyenitem";


const HomeScreen = ({ navigation }) => {
        const [truyen, setTruyen] = useState([]);
        const [truyens, setTruyens] = useState([]);
        const [truyennb, setTruyennb] = useState([]);
        const images = [
            require('../assets/ban.png'),
            require('../assets/ban3.png'),
            require('../assets/ban2.png'),
        ];
        const imagess = [
            require('../assets/a1.png'),
            require('../assets/a2.png'),
            require('../assets/a3.png'),
            require('../assets/a4.png'),
        ];
        useEffect(() => {
            axios
                .get("http://192.168.100.45:3000/Tb_dstruyenTT")
                .then((response) => {
                    setTruyen(response.data);
                })
                .catch((error) => console.error(error));
        }, []);
        useEffect(() => {
            axios
                .get("http://192.168.100.45:3000/Tb_dstruyenYT")
                .then((response) => {
                    setTruyens(response.data);
                })
                .catch((error) => console.error(error));
        }, []);
        useEffect(() => {
            axios
                .get("http://192.168.100.45:3000/Tb_dstruyennb")
                .then((response) => {
                    setTruyennb(response.data);
                })
                .catch((error) => console.error(error));
        }, []);

        const handleOnPress = (id) => {
            const truyena = findStoryById(truyen, id);
            if (truyena !== null) {
                navigation.navigate("Tttruyen", { truyena });
            }
        };
        const handleOnPresss = (id) => {
            const truyena = findStoryById(truyens, id);
            if (truyena !== null) {
                navigation.navigate("Tttruyen", { truyena });
            }
        };
        const handleOnPresssa = (id) => {
            const truyena = findStoryById(truyennb, id);
            if (truyena !== null) {
                navigation.navigate("Tttruyen", { truyena });
            }
        };
        return ( <
                View >
                <
                ScrollView >

                <
                View style = {
                    { flexDirection: "row", marginTop: 35 } } >
                <
                Text style = {
                    { marginLeft: 20, color: "green", fontSize: 30 } } >
                Thế Giới Truyện <
                /Text> <
                View >
                <
                Image source = { require("../assets/logo.png") }
                style = {
                    { borderRadius: 20, height: 80, width: 70, marginLeft: 80 } }
                /> <
                /View> <
                /View> <
                TouchableOpacity onPress = {
                    () => {
                        navigation.navigate('Timkiem');
                    }
                } >
                <
                View style = {
                    { flexDirection: 'row', width: '80%', backgroundColor: '#fff', borderRadius: 20, borderColor: '#ccc', borderWidth: 1, marginLeft: 45 } } >
                <
                Image source = { require("../assets/tim.png") }
                style = {
                    { height: 40, width: 40, } }
                /> <
                Text style = {
                    { marginTop: 10, color: '#999999' } } >
                Nhập từ khóa tìm kiếm truyện <
                /Text> <
                /View> <
                /TouchableOpacity>

                <
                View style = {
                    { height: 317, marginTop: 15, borderWidth: 6, borderColor: 'red' } } >
                <
                Swiper autoplay = { true }
                showsPagination = { false } > {
                    images.map((image, index) => ( <
                        Image key = { index }
                        source = { image }
                        style = {
                            { width: '100%', height: '100%' } }
                        />
                    ))
                } <
                /Swiper> <
                /View> <
                View style = {
                    { flexDirection: 'row' } } >
                <
                Text style = {
                    { fontSize: 19, marginTop: 10, marginLeft: 15 } } >
                Mới đăng <
                /Text> <
                TouchableOpacity onPress = {
                    () => {
                        navigation.navigate('Dstruyenmoi');
                    }
                }
                style = {
                    { marginTop: 10, marginLeft: 225 } } > < Text style = {
                    { fontSize: 10, marginTop: 10, marginLeft: 15 } } > Xem thêm < /Text> <
                View style = {
                    { backgroundColor: 'red', width: '80%', height: 1, marginLeft: 13 } } > < /View> <
                /TouchableOpacity> <
                /View>

                <
                View >
                <
                ScrollView horizontal = { true } > {
                    truyen.map((item) => ( <
                        TouchableOpacity key = { item.id }
                        onPress = {
                            () => handleOnPress(item.id) } >
                        <
                        View style = {
                            { marginLeft: 12, marginTop: 10, marginRight: 12, } } >
                        <
                        Image source = {
                            { uri: item.image } }
                        style = {
                            { width: 100, height: 120 } }
                        /> <
                        Text style = {
                            { fontSize: 12, marginTop: 8 } } > { item.name } < /Text> <
                        /View> <
                        /TouchableOpacity> 
                    ))
                } <
                /ScrollView> <
                /View>

                <
                View style = {
                    { flexDirection: 'row' } } >
                <
                Text style = {
                    { fontSize: 19, color: 'red', marginTop: 20, marginLeft: 15 } } >
                Có Thể Bạn Sẽ Thích <
                /Text> <
                TouchableOpacity onPress = {
                    () => {
                        navigation.navigate('Dstruyenbst');
                    }
                }
                style = {
                    { marginTop: 25, marginLeft: 129 } } > < Text style = {
                    { fontSize: 10, marginTop: 10, marginLeft: 15 } } > Xem thêm < /Text> <
                View style = {
                    { backgroundColor: 'red', width: '80%', height: 1, marginLeft: 13 } } > < /View> <
                /TouchableOpacity> <
                /View > <
                View >
                <
                ScrollView horizontal = { true } > {
                    truyens.map((item) => ( <
                        TouchableOpacity key = { item.id }
                        onPress = {
                            () => handleOnPresss(item.id) } >
                        <
                        View style = {
                            { marginLeft: 12, marginTop: 10, marginRight: 12 } } >
                        <
                        Image source = {
                            { uri: item.image } }
                        style = {
                            { width: 130, height: 150 } }
                        /> <
                        Text style = {
                            { fontSize: 14, marginTop: 5, marginLeft: 7 } } > { item.name } < /Text> <
                        /View> <
                        /TouchableOpacity> 
                    ))
                } <
                /ScrollView> <
                /View> <
                View >
                <
                Text style = {
                    { fontSize: 19, color: 'green', marginTop: 20, marginLeft: 15 } } >
                Tác Phẩm Tiêu Biểu <
                /Text> <
                /View> <
                View style = {
                    { flexWrap: 'wrap', flexDirection: 'row' } } > {
                    truyennb.map((item) => ( <
                            TouchableOpacity key = { item.id }
                            onPress = {
                                () => handleOnPresssa(item.id) } >
                            <
                            View style = {
                                { marginLeft: 12, marginTop: 10, marginRight: 10 } } >
                            <
                            Image source = {
                                { uri: item.image } }
                            style = {
                                { width: 150, height: 190, marginTop: 10, marginLeft: 17 } }
                            /> <
                            Text style = {
                                { marginLeft: 30, marginTop: 10, fontWeight: "bold" } } > { item.name } < /Text> <
                            /View> <
                            /TouchableOpacity> ))} <
                            /View>

                            <
                            View style = {
                                { height: 314, marginTop: 20, borderWidth: 6, borderColor: 'green' } } >
                            <
                            Swiper autoplay = { true }
                            showsPagination = { false } > {
                                imagess.map((images, index) => ( <
                                    Image key = { index }
                                    source = { images }
                                    style = {
                                        { width: '100%', height: '100%' } }
                                    />
                                ))
                            } <
                            /Swiper> <
                            /View> <
                            View >
                            <
                            Text style = {
                                { fontSize: 19, color: '#A5691E', marginTop: 20, marginLeft: 20 } } >
                            Danh sách khác <
                            /Text> <
                            View style = {
                                { marginTop: 20 } } >
                            <
                            TouchableOpacity onPress = {
                                () => {
                                    navigation.navigate('Dstruyenkhac');
                                }
                            } >
                            <
                            View style = {
                                { flexDirection: 'row' } } >
                            <
                            Text style = {
                                { marginLeft: 20 } } > Ngôn Tình Cố Mạn Full < /Text> <
                            Image source = { require("../assets/next.png") }
                            style = {
                                { height: 15, width: 15, marginLeft: 200, marginTop: 4 } }
                            /> <
                            /View> <
                            View style = {
                                { backgroundColor: 'red', width: '100%', height: 1, marginTop: 20, marginLeft: 20 } } > < /View> <
                            /TouchableOpacity> <
                            /View> <
                            View style = {
                                { marginTop: 20 } } >
                            <
                            TouchableOpacity onPress = {
                                () => {
                                    navigation.navigate('Dstruyenkhac');
                                }
                            } >
                            <
                            View style = {
                                { flexDirection: 'row' } } >
                            <
                            Text style = {
                                { marginLeft: 20 } } > Ngôn Tình Tân Di Ô < /Text> <
                            Image source = { require("../assets/next.png") }
                            style = {
                                { height: 15, width: 15, marginLeft: 220, marginTop: 4 } }
                            /> <
                            /View> <
                            View style = {
                                { backgroundColor: 'red', width: '100%', height: 1, marginTop: 20, marginLeft: 20 } } > < /View> <
                            /TouchableOpacity> <
                            /View> <
                            View style = {
                                { marginTop: 20 } } >
                            <
                            TouchableOpacity >
                            <
                            View style = {
                                { flexDirection: 'row' } } >
                            <
                            Text style = {
                                { marginLeft: 20 } } > Top 50 Tiểu Thuyết Hay Nhất < /Text> <
                            Image source = { require("../assets/next.png") }
                            style = {
                                { height: 15, width: 15, marginLeft: 160, marginTop: 4 } }
                            /> <
                            /View> <
                            View style = {
                                { backgroundColor: 'red', width: '100%', height: 1, marginTop: 20, marginLeft: 20 } } > < /View> <
                            /TouchableOpacity> <
                            /View> <
                            View style = {
                                { marginTop: 20 } } >
                            <
                            TouchableOpacity >
                            <
                            View style = {
                                { flexDirection: 'row' } } >
                            <
                            Text style = {
                                { marginLeft: 20 } } > Những Tác Phẩm Kinh Điển < /Text> <
                            Image source = { require("../assets/next.png") }
                            style = {
                                { height: 15, width: 15, marginLeft: 165, marginTop: 4 } }
                            /> <
                            /View> <
                            View style = {
                                { backgroundColor: 'red', width: '100%', height: 1, marginTop: 20, marginLeft: 20 } } > < /View> <
                            /TouchableOpacity> <
                            /View> <
                            /View> <
                            /ScrollView> <
                            /View>

                        );

                    };

                    function findStoryById(truyen, id) {
                        const filteredArr = truyen.filter((item) => item.id === id);
                        if (filteredArr.length === 0) {
                            return null;
                        } else {
                            return filteredArr[0];
                        }
                    }
                    export default HomeScreen;