import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const thuchanh = () => {
    return (
      <View style={styles.container}>
        <Image source={require('path/to/your/image')} style={styles.image} />
        <Text style={styles.title}>Màn hình bán hàng</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Mua hàng</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });
  export default thuchanh;