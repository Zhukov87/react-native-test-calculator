import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';

class MemoryString extends Component {
    render() {
        return(
            <View style={styles.historyContainer}>
                <Text style={styles.history} > {this.props.history} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    historyContainer: {
        width: "100%",
        marginTop: 10,
        paddingRight: 20
    },
    history: {
        fontSize: 20,
        textAlign: "right",
        width: "100%",
    }
});

export default connect((state) => {
    return ({
        history: state.lastResult
    })
})(MemoryString);