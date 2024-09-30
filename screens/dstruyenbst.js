import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, Dimensions, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Dstruyenbst = () => {
  const navigation = useNavigation();
  const [storiess, setStoriess] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.100.45:3000/Tb_dstruyenbst")
      .then((response) => {
        setStoriess(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  const handleOnPresssa = (id) => {
    const truyena= findStoryById(storiess, id);
    if (truyena !== null) {
      navigation.navigate("Tttruyen", { truyena });
    }
  };
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require("../assets/left.png")} style={{ height: 25, width: 25, marginLeft: 15, marginTop: 20 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 25, color: "red", marginLeft: 40, marginTop: 20 }}>Truyện Yêu Thích Nhất</Text>
      </View>
      <View style={{ flex: 1, marginTop: 20 }}>
        <FlatList
          data={storiess}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={{ borderWidth: 0.5, borderRadius: 5, width: "100%", marginTop: 10, height: 178 }}
              onPress={() => handleOnPresssa(item.id)}
            >
              <View style={{ height: 170, paddingStart: 15, marginTop: 3, flexDirection: "row" }}>
                <Image source={{ uri: item.image }} style={{ borderRadius: 20, height: 170, width: 100 }} />
                <View style={{ flex: 1, marginLeft: 20, marginRight: 15, marginTop: 20, marginBottom: 10 }}>
                  <Text style={{ fontWeight: "bold", marginTop: 7, fontSize: 17 }}>{item.name}</Text>
                  <View style={{ height: 1, backgroundColor: "black" }} />
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold", marginTop: 7, fontSize: 17 }}>Tác giả: </Text>
                    <Text style={{ marginTop: 7, fontSize: 17 }}>{item.Tacgia}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold", marginTop: 7, fontSize: 17 }}>Số Chương: </Text>
                    <Text style={{ marginTop: 7, fontSize: 17 }}>{item.Sochuong}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold", marginTop: 7, fontSize: 17 }}>Nguồn: </Text>
                    <Text style={{ marginTop: 7, fontSize: 17 }}>{item.Nguon}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
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
export default Dstruyenbst;