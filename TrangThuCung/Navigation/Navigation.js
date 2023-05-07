import 'react-native-gesture-handler';

import * as React from 'react';

import { Button, TouchableOpacity, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import CartScreen from '../Screen/CartScreen';
import DetailScreen from '../Screen/DetailScreen';
import DrawerAllScreen from '../Screen/DrawerAllScreen';
import FavoritesScreen from '../Screen/FavoritesScreen';
import FilterScreen from '../Screen/FilterScreen';
import HomeScreen from '../Screen/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import ProductsScreen from '../Screen/ProductsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const FilterStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Bộ lọc' component={FilterScreen} />
        </Stack.Navigator>
    )
}

const DrawerAllStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='DrawerAllScreen' component={DrawerAllScreen} />
        </Stack.Navigator>
    )
}
const TabH = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Trang chủ') {
                        iconName = focused
                            ? 'ios-home' : 'ios-home-outline';
                    } else if (route.name === 'Yêu thích') {
                        iconName = focused ? 'ios-star' : 'ios-star-outline';
                    } else if (route.name === 'Giỏ hàng') {
                        iconName = focused ? 'ios-cart' : 'ios-cart-outline';
                    } 
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'white',
                tabBarActiveBackgroundColor: '#2E89FF',
                tabBarInactiveTintColor: 'black',
                tabBarInactiveBackgroundColor: '#F2F2F2'
            })}
        >
            <Tab.Screen name='Trang chủ' component={MainStack} options={{ headerShown: false}}></Tab.Screen>
            <Tab.Screen name='Yêu thích' component={FavStack} options={{ headerShown: false}}></Tab.Screen>
            <Tab.Screen name='Giỏ hàng' component={CartStack} options={{ headerShown: false}}></Tab.Screen>
        </Tab.Navigator>
    )
}
const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="ProductsScreen" component={ProductsScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    )
}
const FavStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
        </Stack.Navigator>
    )
}
const CartStack = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="CartScreen" component={CartScreen}/>
        </Stack.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Trang chủ' component={TabH} options={{ headerShown: false }} />
                <Drawer.Screen name='Bộ lọc sản phẩm' component={FilterStack} />
                <Drawer.Screen name='Xem tất cả sản phẩm' component={DrawerAllStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}


export default Navigation


