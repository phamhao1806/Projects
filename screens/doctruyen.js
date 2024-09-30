import {React, useState,useEffect} from 'react';
import { View, Image, StyleSheet ,ScrollView,TouchableOpacity,Text} from 'react-native';
//import Swiper from 'react-native-swiper';
import axios from "axios";

const Doctruyen = ({ route ,navigation}) => {
    const { truyena } = route.params;
    return (
        <View>
          <ScrollView style={{ }}>
          <View style={{ flexDirection:'row'}}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{  marginTop:28,width:65, height:50}}>
              <Image source={require("../assets/left.png")} style={{ height: 25, width: 25, marginLeft: 10, marginTop: 10 }} />
            </TouchableOpacity>
          <Text style={{ marginTop:35, fontSize:22,marginLeft:36}}>{truyena.name}</Text>
          </View>
          <View style={{backgroundColor:'black',width:'100%',height:0.5, marginTop:7 }}></View>
       
             
          <Text style={{ fontSize:20, marginTop:8, marginLeft:10, marginRight:10,textAlign: 'center',padding:5}}>{truyena.noidung}</Text>
         
                </ScrollView>
                </View>
                  );
};
export default Doctruyen;