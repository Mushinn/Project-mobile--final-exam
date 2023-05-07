import { FlatList, Image, Switch, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

import Ionicons from 'react-native-vector-icons/Ionicons';
import PRODUCTS from "../products";
import { useCallback } from 'react';
import { useDispatch } from "react-redux";

const FilterScreen = ({ navigation }) => {

    const [isBrandOn, setIsBrandOn] = useState(false);
    const [isSaleOn, setIsSaleOn] = useState(false);

    const dispatch = useDispatch();
    const saveFilter = useCallback(() => {
        const filters = {
            isBrandOn: isBrandOn,
            isSaleOn: isSaleOn,
        }
        dispatch({ type: 'SET_FILTER', filters: filters })
    }, [dispatch, isBrandOn, isSaleOn])

    useEffect(() => {
        navigation.setOptions({
            headerTitle: "Lọc sản phẩm",
            headerTitleAlign: 'left',
            headerTittleStyle: { alignSelf: 'center' },
            headerRight: () => (
                <TouchableOpacity onPress={() => saveFilter()} >
                    <View>
                        <Ionicons name='ios-save' size={40} />
                    </View>
                </TouchableOpacity>
            )

        })
    }, [isBrandOn, isSaleOn, navigation])
    return (
        <View style={{ paddingHorizontal: 50, paddingVertical: 30 }}>
            <Text style={{ width: 300, height: 50, lineHeight: 50, fontSize: 30 }}>Chọn bộ lọc</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ width: 300, height: 50, lineHeight: 50, fontSize: 21 }}>Hàng mới</Text>
                <Switch style={{ width: 50, height: 50 }} value={isBrandOn} onValueChange={newValue => setIsBrandOn(newValue)} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ width: 300, height: 50, lineHeight: 50, fontSize: 21 }}>Hàng khuyến mãi</Text>
                <Switch style={{ width: 50, height: 50 }} value={isSaleOn} onValueChange={newValue => setIsSaleOn(newValue)} />
            </View>

        </View>

    )
};

export default FilterScreen;