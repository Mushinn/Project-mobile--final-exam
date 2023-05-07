import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { useSelector } from "react-redux";

const CartScreen = (props) => {
    const cartProducts = useSelector(state => state.cartProducts)
    if (cartProducts.length !== 0) {
        return (
            <View style={styles.viewFull}>
                <FlatList
                    data={cartProducts}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={styles.product} onPress={() => props.navigation.navigate('DetailScreen', { productId: item.id })} >
                            <View style={styles.view}>
                                <Image source={{ uri: item.image, }} style={styles.img} />
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
    else return <View style={styles.viewFull}><Text style={{fontSize: 50, textAlignVertical: 'center',
    textAlign: 'center', fontWeight: 'bold'}}>Bạn chưa bỏ sản phẩm nào vào giỏ hàng!</Text></View>
};
const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 150
    },
    product: {
        backgroundColor: '#F2F2F2',
        marginVertical: 10,
        marginHorizontal: 50,

    },

    viewFull: {
        backgroundColor: 'white',
        height: '100%'
    },

    view: {
        marginVertical: 20,
        alignSelf: 'center',
    },
    name: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default CartScreen;