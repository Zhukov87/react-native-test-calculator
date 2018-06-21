import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/store';
import Calculator from './src/components/Calculator';


export default class App extends Component{
  render() {
    return (
      <Provider store={store} >
        <Calculator />
      </Provider>
    );
  }
}


