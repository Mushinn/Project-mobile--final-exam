import * as React from 'react';

import { DefaultTheme, Provider as PaperRovider } from 'react-native-paper'

import { Appbar } from 'react-native-paper';
import { Component } from 'react';
import Navigation from './TrangThuCung/Navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { legacy_createStore as createStore } from 'redux';
import reducer from './TrangThuCung/Store/reducer'

const store =createStore(reducer);

export default function App(){
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}