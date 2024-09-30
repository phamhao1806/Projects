import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, Text, View,Image,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const  Thongtin = ({navigation}) =>  {
  
  return (
    <ScrollView>
      
    <View style={{ flex:1, flexDirection:'row',height:120 }}>
    <Image
          source={require("../assets/user.png")}
          style={{ width:70, height:70,marginRight:15, marginTop:15, borderWidth:1}}
        />
       
        <Text style={{fontSize:20, marginTop:30, }} >Phạm Hào</Text>
         
      <View style={{ flex:1, justifyContent: 'center', flexDirection:'row'}}>
    <TouchableOpacity 
    onPress={()=> {
      navigation.navigate('Ở ĐÂY CÓ NHIỀU TRYỆN HAY !!');
    }} style={{ width: 80, height: 40, borderWidth: 1, borderRadius:5, justifyContent: 'center',alignItems:'center', marginTop:25, marginLeft:40, backgroundColor:'green'}}><Text> Đăng Xuất </Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={{backgroundColor:'red',width:'100%',height:2 }}></View>
    <View>
      <Text style={{ marginTop:15, marginLeft:10}}> CHÍNH SÁCH</Text>
      <View style={{flex:1,flexDirection:'row', width:'100%', marginTop:7}}>
      <Image
          source={require("../assets/kk.png")}
          style={{ width:30, height:30, marginTop:4, borderWidth:1}}
        />
      <TouchableOpacity 
    onPress={()=> {
      navigation.navigate('');
    }} style={{ width: 150, height: 30,  justifyContent: 'center',alignItems:'center', marginTop:4, }}><Text style={{fontSize:15}}> Điều khoản sử dụng </Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={{flex:1,flexDirection:'row', width:'100%', marginTop:7}}>
      <Image
          source={require("../assets/kk.png")}
          style={{ width:30, height:30, marginTop:4, borderWidth:1}}
        />
      <TouchableOpacity 
    onPress={()=> {
      navigation.navigate('');
    }} style={{ width: 150, height: 30,  justifyContent: 'center',alignItems:'center', marginTop:4, }}><Text style={{fontSize:15}}> Chính sách bảo mật </Text>
    </TouchableOpacity>
    </View>
    <View>
      <Text style={{ marginTop:35, marginLeft:10}}> LIÊN HỆ</Text>
      <View style={{flex:1,flexDirection:'row', width:'100%', marginTop:7 ,marginLeft:5}}>
      <Image
          source={require("../assets/facebook.png")}
          style={{ width:30, height:30, marginTop:4, borderWidth:1}}
        />
      <TouchableOpacity 
    onPress={()=> {
      navigation.navigate('');
    }} style={{ width: 150, height: 30,  justifyContent: 'center',marginTop:4,marginLeft:10 }}><Text style={{fontSize:15,}}> Facebook </Text>
    </TouchableOpacity>
    </View>
    <View style={{flex:1,flexDirection:'row', width:'100%', marginTop:1,marginLeft:5}}>
      <Image
          source={require("../assets/mail.png")}
          style={{ width:30, height:30, marginTop:4, borderWidth:1}}
        />
<TouchableOpacity 
    onPress={()=> {
      navigation.navigate('');
    }} style={{ width: 150, height: 30,  justifyContent: 'center',marginTop:4,marginLeft:10 }}><Text style={{fontSize:15,}}> Gửi mail </Text>
    </TouchableOpacity>
    </View>
    </View>
    <View>
      <Text style={{ marginTop:35, marginLeft:10}}> CỘNG ĐỒNG</Text>
      <View style={{flex:1,flexDirection:'row', width:'100%', marginTop:7 ,marginLeft:5}}>
      <Image
          source={require("../assets/chat.png")}
          style={{ width:25, height:25, marginTop:4, borderWidth:1}}
        />
      <TouchableOpacity 
    onPress={()=> {
      navigation.navigate('');
    }} style={{ width: 150, height: 30,  justifyContent: 'center',marginTop:4,marginLeft:10 }}><Text style={{fontSize:15,}}> Bình luận </Text>
    </TouchableOpacity>
    </View>
    <View style={{flex:1,flexDirection:'row', width:'100%', marginTop:1,marginLeft:5}}>
      <Image
          source={require("../assets/star.png")}
          style={{ width:25, height:25, marginTop:4, borderWidth:1}}
        />
      <TouchableOpacity 
    onPress={()=> {
      navigation.navigate('');
    }} style={{ width: 150, height: 30,  justifyContent: 'center',marginTop:4,marginLeft:10 }}><Text style={{fontSize:15,}}>Nhận xét </Text>
    </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
  )

}

export default Thongtin;