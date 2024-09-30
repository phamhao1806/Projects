import {React, useState,useEffect} from 'react';
import { View, Image, StyleSheet ,ScrollView,TouchableOpacity,Text} from 'react-native';
//import Swiper from 'react-native-swiper';
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Ttruyen = ({ route }) => {
  
  const { truyena } = route.params;
   const navigation = useNavigation();
  const onPressDocTruyen = () => {
    navigation.navigate('Doctruyen', { truyena });
  };
  return (
    <View>
      <View style={{ flexDirection:'row'}}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{  marginTop:28,width:65, height:50}}>
          <Image source={require("../assets/left.png")} style={{ height: 25, width: 25, marginLeft: 10, marginTop: 10 }} />
        </TouchableOpacity>
      <Text style={{ marginTop:35, fontSize:22,marginLeft:53}}> Thông tin truyện</Text>
      </View>
      <View style={{backgroundColor:'black',width:'100%',height:0.5, marginTop:7 }}></View>
      <ScrollView style={{ marginTop:13}}>
          <View  style={{ marginLeft: 12, marginTop: 10 , marginRight:12, flexDirection: 'row', }}>
            <Image
              source={{ uri: truyena.image }}
              style={{ width: 110, height: 140, borderRadius:10 }}
            />
            <View>
            <Text style={{ fontSize:18, marginTop:8,fontWeight: 'bold', marginLeft:20}}>{truyena.name}</Text>
            <Text style={{ fontSize:16, marginTop:8, marginLeft:20}}>{truyena.Tacgia}</Text>
            </View>
          </View>
          <View style={{backgroundColor:'black',width:'100%',height:0.5, marginTop:7 }}></View>
          <Text style={{ marginTop:15, fontSize:15,marginLeft:160,color:'green',}}> Thông tin </Text>
          <View style={{backgroundColor:'black',width:'100%',height:0.5, marginTop:7 }}></View>
          <View>
          <Text style={{ marginTop:7, fontSize:18,marginLeft:13,fontWeight: 'bold'}}>Miêu Tả</Text>
            <Text style={{ fontSize:16, marginTop:8, marginLeft:20}}>{truyena.Mieuta}</Text>
            <View style={{ flexDirection:'row',flexWrap:'wrap'}}>
            <Text style={{ marginTop:7, fontSize:16,marginLeft:13,fontWeight: 'bold'}}>Thể Loại:</Text>
            <Text style={{ fontSize:15, marginTop:3, marginLeft:14}}>{truyena.Theloai}</Text>
            </View>
            </View>
            <View style={{ flex:1, justifyContent: 'center', flexDirection:'row', marginTop:55}}>
    <TouchableOpacity onPress={onPressDocTruyen} 
    style={{ width: 120, height: 40, borderWidth: 1, borderRadius:20, justifyContent: 'center',alignItems:'center', marginRight:5, backgroundColor:'red'}}><Text> Đọc Truyện </Text>
    </TouchableOpacity>
    </View>
      </ScrollView>
    </View>
  );

};

export default Ttruyen;