import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PRODUCTS from "../products";

const DrawerAllScreen = (props) => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Danh sách sản phẩm",
            headerTitleAlign: 'left',
        });
    }, [navigation]);

    return (
        <FlatList
            data={PRODUCTS}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({ item }) =>
                <TouchableOpacity style={styles.product} onPress={() => props.navigation.navigate('DetailScreen', { productId: item.id })} >
                    <View style={styles.view}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.img}
                        />
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            }
        />
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    product: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 10,
      overflow: 'hidden',
      marginVertical: 10,
      marginHorizontal: 10,
    },
    img: {
      alignSelf: 'center',
      width: 200,
      height: 200,
    },
    name: {
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      marginTop: 10,
      marginLeft: 10,
    },
  });

export default DrawerAllScreen;
