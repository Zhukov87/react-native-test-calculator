import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';

class Display extends Component {
    render() {
        return(
            <View>
                <View style={styles.textConteiner} >
                    <Text style={styles.text} >{ this.props.result }</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textConteiner: {
        width: "100%",
        marginTop: 70,
        paddingRight: 20
    },
    text: {
        textAlign: "right",
        width: "100%",
        fontSize: 80,
    } 
})


export default connect((state) => {
    return({
        result: state.result
    })
})(Display);