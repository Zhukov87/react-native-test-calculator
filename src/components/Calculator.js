import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Display from './Display';
import ButtonsField from './ButtonsField';
import MemoryString from './MemoryString';

class Calculator extends Component {
    render() {
        return(
            <View style={{flex: 1}} >
                <View style={{flex: 1}} >
                    <Display />
                </View>
                <View style={{flex: 0.5, backgroundColor: 'grey'}} >
                    <MemoryString />
                </View>
                <View style={{flex: 3}} >
                    <ButtonsField />
                </View>
            </View>
        );
    }
}

export default Calculator;