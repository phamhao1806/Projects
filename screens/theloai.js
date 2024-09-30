import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, Text, View,Image,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const  Theloai = ({navigation}) =>  {
  return (
    
      <ScrollView>
      <View style={{ flex:1, justifyContent: 'center', flexDirection:'row'}}>
    <TouchableOpacity 
    onPress={()=> {
      navigation.navigate('Dstruyenhaihuoc');
    }} style={{ width: 200, height: 80, borderWidth: 1, borderRadius:5, justifyContent: 'center',alignItems:'center', marginRight:5, backgroundColor:'orange'}}><Text> Hài hước </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> {
                       navigation.navigate('dstruyen');
                     }} 
    style={{ width: 200, height: 80, borderWidth: 1, borderRadius:5, justifyContent: 'center',alignItems:'center', marginRight:5, backgroundColor:'orange'}}><Text> Kinh Dị </Text>
    </TouchableOpacity>
    </View>
    <View style={{ flex:1, justifyContent: 'center', flexDirection:'row', marginTop:25}}>
    <TouchableOpacity onPress={()=> {
                       navigation.navigate('Dstruyentrinhtham');
                     }} 
    style={{ width: 200, height: 80, borderWidth: 1, borderRadius:5, justifyContent: 'center',alignItems:'center', marginRight:5, backgroundColor:'orange'}}><Text> Trinh Thám </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> {
                       navigation.navigate('dstruyen');
                     }}  style={{width: 200, height: 80, borderWidth: 1, borderRadius:5, justifyContent: 'center',alignItems:'center', marginRight:5, backgroundColor:'orange'}}><Text> Kiếm Hiệp </Text>
    </TouchableOpacity>
    </View>
    <View style={{ flex:1, justifyContent: 'center', flexDirection:'row', marginTop:25}}>
    <TouchableOpacity onPress={()=> {
                       navigation.navigate('dstruyen');
                     }} 
    style={{ width: 200, height: 80, borderWidth: 1, borderRadius:5, justifyContent: 'center',alignItems:'center', marginRight:5, backgroundColor:'orange'}}><Text> Ngôn Tình</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> {
                       navigation.navigate('dstruyen');
                     }}  style={{ width: 200, height: 80, borderWidth: 1, borderRadius:5, justifyContent: 'center',alignItems:'center', marginRight:5, backgroundColor:'orange'}}><Text> Cổ Đại </Text>
    </TouchableOpacity>
    </View>
    <View style={{ flex:1, justifyContent: 'center', flexDirection:'row', marginTop:25}}>
    <TouchableOpacity onPress={()=> {
                       navigation.navigate('dstruyen');
                     }} 
    style={{ width: 200, height: 80, borderWidth: 1, borderRadius:5, justifyContent: 'center',alignItems:'center', marginRight:5, backgroundColor:'orange'}}><Text> Tiểu Thuyết </Text>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={()=> {
                       navigation.navigate('dstruyen');
                     }}  style={{ width: 200, height: 80, borderWidth: 1, borderRadius:5, justifyContent: 'center',alignItems:'center', marginRight:5, backgroundColor:'orange'}}><Text> Tình cảm </Text>
    </TouchableOpacity>
    </View>
    <View style={{ flex:1, justifyContent: 'center', flexDirection:'row', marginTop:25}}>
   
    <TouchableOpacity onPress={()=> {
                       navigation.navigate('dstruyen');
                     }} 
    style={{ width: 200, height: 80, borderWidth: 1, borderRadius:5, justifyContent: 'center',alignItems:'center', marginRight:5, backgroundColor:'orange'}}><Text> Cổ điển </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> {
                       navigation.navigate('dstruyen');
                     }} 
    style={{ width: 200, height: 80, borderWidth: 1, borderRadius:5, justifyContent: 'center',alignItems:'center', marginRight:5, backgroundColor:'orange'}}><Text> Khác </Text>
    </TouchableOpacity>
    
    </View>
    </ScrollView>
    
  )
}

export default Theloai;                         