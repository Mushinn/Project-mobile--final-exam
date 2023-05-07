import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from 'react';

import CATEGORIES from "../category";
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({
            title: 'Trang chủ',
            headerTittleStyle: { alignSelf: 'center'},
            headerLeft: () => (
                <View>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Ionicons name={'ios-menu'} size={50} />
                    </TouchableOpacity>
                </View>
            ),

        })
    }, [navigation])
    return (
        <View style={styles.viewFull}>
            <FlatList
                data={CATEGORIES}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ProductsScreen', { categoryId: item.id })}
                        style={styles.button}>
                        <View style={[styles.view, { backgroundColor: item.color }]}>
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        

    },

    viewFull: {
        backgroundColor: 'white',
        height: '100%'
    },

    view:{
        borderRadius: 20,
        width: '90%',
        alignSelf: 'center',
        margin: 5,
    },

    text: {
        alignSelf: 'center',
        height: 50,
        lineHeight: 50,
        fontSize: 18,
        fontWeight: 'bold',


    }
})

export default HomeScreen;