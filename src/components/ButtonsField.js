import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { pressNumber, pressOperation, pressResult, clearAll } from '../actionCreators/actionCreators';


class ButtonsField extends Component {
    onPressButtonNumber = (number) => {
        this.props.pressNumber(number);
    }

    onPressButtonOperation = (operation) => {
        this.props.pressOperation(operation);
    }

    onPressButtonResult = () => {
        this.props.pressResult();
    }

    onPressClearAll = () => {
        this.props.clearAll();
    }

    render() {
        return(
                <View style={styles.container} >
                    <View style={styles.buttonRowContainer}>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="7"
                                onPress={() => this.onPressButtonNumber(7)} />
                        </View>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="8"
                                onPress={() => this.onPressButtonNumber(8)} />
                        </View>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="9"
                                onPress={() => this.onPressButtonNumber(9)} />
                        </View>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="C"
                                onPress={() => this.onPressClearAll()} />
                        </View>
                    </View>
                    <View style={styles.buttonRowContainer}>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="4"
                                onPress={() => this.onPressButtonNumber(4)} />
                        </View>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="5"
                                onPress={() => this.onPressButtonNumber(5)} />
                        </View>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="6"
                                onPress={() => this.onPressButtonNumber(6)} />
                        </View>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="+"
                                onPress={() => this.onPressButtonOperation('+')} />
                        </View>
                    </View>
                    <View style={styles.buttonRowContainer}>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="1"
                                onPress={() => this.onPressButtonNumber(1)} />
                        </View>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="2"
                                onPress={() => this.onPressButtonNumber(2)} />
                        </View>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="3"
                                onPress={() => this.onPressButtonNumber(3)} />
                        </View>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="-"
                                onPress={() => this.onPressButtonOperation('-')} />
                        </View>
                    </View>
                    <View style={styles.buttonRowContainer}>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="."
                                onPress={() => this.onPressButtonNumber('.')} />
                        </View>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="0"
                                onPress={() => this.onPressButtonNumber(0)} />
                        </View>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="%"
                                onPress={() => this.onPressButtonOperation('%')} />
                        </View>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="*"
                                onPress={() => this.onPressButtonOperation('*')} />
                        </View>
                    </View>
                    <View style={styles.buttonRowContainer}>
                        <View style={{ width: "75%", height: 50, justifyContent: 'center', }} >
                            <Button 
                                title="="
                                onPress={() => this.onPressButtonResult()} />
                        </View>
                        <View style={styles.buttonContainer} >
                            <Button 
                                title="/"
                                onPress={() => this.onPressButtonOperation('/')} />
                        </View>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1
   },
   buttonRowContainer: {
    flex: 1, 
    flexDirection: 'row', 
    borderColor: 'black', 
    marginBottom: 30, 
    marginTop: 30
   },
   buttonContainer: {
    width: "25%", 
    height: 50, 
    justifyContent: 'center'
   }
});

export default connect((state) => {
    return ({
        firstNumber: state.firstNumber,
        secondNumber: state.secondNumber,
        operation: state.operation
    });
}, { pressNumber, pressOperation, pressResult, clearAll })(ButtonsField);