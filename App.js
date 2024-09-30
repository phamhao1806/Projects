import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import Tttruyen from './screens/chitiettruyen';
import Welcome from './screens/welcome';
import Dangki from './screens/Dangki';
import Timkiem from './screens/timkiem';
import Doctruyen from './screens/doctruyen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Theloai from './screens/theloai';
import Thongtin from './screens/thongtin';
import Dstruyen from './screens/dstruyen';
import Dstruyenbst from './screens/dstruyenbst';
import Dstruyenkhac from './screens/dstruyenkhac';
import Dstruyenmoi from './screens/dstruyenmoi';
import Dstruyenhaihuoc from './screens/dstruyenhaihuoc';
import Dstruyentrinhtham from './screens/dstruyentrinhtham';

const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Trang chủ" component={HomeScreen} options={{

        tabBarIcon: ()=> <Icon name="home" size={25} color={'black'}
        />, headerShown: false
      }} />
      <Tab.Screen name="Thể loại" component={Theloai} options={{

tabBarIcon: ()=> <Icon name="list" size={25} color={'black'}/>
}} />
      <Tab.Screen name="Thông tin" component={Thongtin} options={{

tabBarIcon: ()=> <Icon name="user" size={25} color={'black'}/>
}}  />
    </Tab.Navigator>
  );}

  
const StackDemo = createNativeStackNavigator();
const App = () => {
 return (
  
   <NavigationContainer>
     <StackDemo.Navigator initialRouteName='Ở ĐÂY CÓ NHIỀU TRYỆN HAY !!'options={{headerShown: false}} >
     <StackDemo.Screen name="Ở ĐÂY CÓ NHIỀU TRYỆN HAY !!" component={Welcome}/>
     <StackDemo.Screen name="Dangki" component={Dangki}  options={{headerShown: false}}/>
     <StackDemo.Screen name='Thể loại' component={Theloai}   /> 
     <StackDemo.Screen name='Tttruyen' component={Tttruyen}  options={{headerShown: false}}  /> 
     <StackDemo.Screen name='dstruyen' component={Dstruyen} options={{headerShown: false}} />
     <StackDemo.Screen name='Thông tin' component={Thongtin}   />
     <StackDemo.Screen name='Doctruyen' component={Doctruyen} options={{headerShown: false}}  />
     <StackDemo.Screen name='Timkiem' component={Timkiem}  options={{headerShown: false}}  />
     <StackDemo.Screen name='Dstruyenbst' component={Dstruyenbst} options={{headerShown: false}} />
       <StackDemo.Screen name='Login' component={Login} options={{headerShown: false}} />
       <StackDemo.Screen name='Dstruyenkhac' component={Dstruyenkhac} options={{headerShown: false}} />
       <StackDemo.Screen name='Dstruyenmoi' component={Dstruyenmoi} options={{headerShown: false}} />
       <StackDemo.Screen name='Dstruyenhaihuoc' component={Dstruyenhaihuoc} options={{headerShown: false}} />
       <StackDemo.Screen name='Dstruyentrinhtham' component={Dstruyentrinhtham} options={{headerShown: false}} />
       <StackDemo.Screen name='HomeScreen' component={HomeScreen}  />
       <StackDemo.Screen name="Thế giới truyện" component={MyTabs} options={{headerShown: false}} />

     </StackDemo.Navigator>
   </NavigationContainer> 


 )

}

export default App;