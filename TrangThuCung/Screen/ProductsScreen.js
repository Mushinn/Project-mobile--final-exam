import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { useSelector } from "react-redux";

const ProductsScreen = (props) => {
    const { categoryId } = props.route.params;

    const availableProducts = useSelector(state => state.filterProducts);
    const data = availableProducts.filter(item => item.categoryId === categoryId);

    return (
      <View style={styles.viewFull}>
        <FlatList
            data={data}
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
      </View>
    )
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    viewFull: {
      backgroundColor: 'white',
      height: '100%'
    },
    product: {
      backgroundColor: '#F2F2F2',
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

export default ProductsScreen;