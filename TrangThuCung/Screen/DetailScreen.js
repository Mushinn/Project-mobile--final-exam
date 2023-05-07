import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PRODUCTS from "../products";

const DetailScreen = (props, { navigation }) => {
    const { productId } = props.route.params;
    const availableProducts = useSelector(state => state.products);
    const product = availableProducts.find(item => item.id === productId);
    const dispatch = useDispatch();
    const [isFavorited, setIsFavorited] = useState(false);
    const [isCarted, setIsCarted] = useState(false);
    const addToFav = useCallback(() => {
        dispatch({ type: 'TOGGLE_FAVORITE', productId: productId });
        setIsFavorited(prevState => !prevState);
    }, [dispatch, productId]);
    const addToCart = useCallback(() => {
        dispatch({ type: 'TOGGLE_CART', productId: productId });
        setIsCarted(prevState => !prevState);
    }, [dispatch, productId]);



    useEffect(() => {
        props.navigation.setOptions({
            title: 'Chi tiết sản phẩm',
            headerTitleStyle: { alignSelf: 'center' },
            headerRight: () => (
                <View>
                    <TouchableOpacity onPress={() => addToFav()}>
                        <AntDesign name={isFavorited ? "star" : "staro"} size={24} color={isFavorited ? "gold" : "black"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => addToCart()}>
                        <Ionicons name={isCarted ? "cart" : "cart-outline"} size={24} color={isCarted ? "gold" : "black"} />
                    </TouchableOpacity>
                    
                </View>
            ),
        });
    }, [navigation, productId, isFavorited, isCarted]);

    return (
        <View style={styles.viewFull}>
            <View style={styles.view}>
                <Image
                    style={styles.img}
                    source={{ uri: product.image }}
                />
                <View style={styles.container}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.text} >Mô tả sản phẩm:</Text>
                    <Text style={styles.text} >{product.description}</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        alignSelf: 'center',
        backgroundColor: '#edd4b6',
    },

    viewFull: {
        backgroundColor: '#white',
        height: '100%'
    },

    img: {
        alignSelf: 'center',
        marginVertical: 50,
        width: 420,
        height: 300
    },
    name: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },
    container: {
        alignSelf: 'center',
        backgroundColor: '#edd4b6',
        padding: 200,
        borderRadius: 100
    },
    text: {
        alignSelf: 'center',
        fontSize: 20
    }
});


export default DetailScreen;
