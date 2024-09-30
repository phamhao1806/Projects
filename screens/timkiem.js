import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, TextInput } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Timkiem = () => {
  const [truyen, setTruyen] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get("http://192.168.100.7:3000/Tb_dstruyenTT")
      .then((response) => {
        setTruyen(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Cập nhật danh sách kết quả tìm kiếm mỗi khi thay đổi searchKeyword
    const filteredTruyenList = searchKeyword
      ? truyen.filter((truyenss) =>
          truyenss.name.toLowerCase().includes(searchKeyword.toLowerCase())
        )
      : [];

    setSearchResults(filteredTruyenList);
  }, [searchKeyword, truyen]);

  return (
    <View>
      <View style={{ backgroundColor: 'red', height: 90, flexDirection: 'row' }}>
        <View
          style={{
            flexDirection: 'row',
            width: '75%',
            backgroundColor: '#fff',
            borderRadius: 20,
            borderColor: '#ccc',
            borderWidth: 1,
            marginLeft: 15,
            marginTop: 50,
          }}
        >
          <Image source={require("../assets/tim.png")} style={{ height: 30, width: 40, marginTop: 7 }} />
          <TextInput
            style={{ marginTop: 5, color: '#999999' }}
            placeholder="Nhập tên truyện"
            value={searchKeyword}
            onChangeText={(text) => setSearchKeyword(text)}
          />
        </View>
        <View style={{ height: 42, marginTop: 44, marginLeft: 10, width: 60 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ fontSize: 17, color: 'white', marginTop: 10, marginLeft: 6 }}> Đóng</Text>
          </TouchableOpacity>
        </View>
      </View>

      {searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text style={{ marginTop: 20 }}>{item.name}</Text>
          )}
        />
      ) : (
        <Text style={{ marginTop: 20, textAlign: 'center' }}>
          Không có truyện nào.
        </Text>
      )}
    </View>
  );
};

export default Timkiem;