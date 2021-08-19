import React, { Component } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';


export default InputRound = (props) => {
    return(
        <View style={styles.root}>
            <TextInput secureTextEntry={props.password} placeholder={props.placeholder} style={styles.input} {...props}/>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
      width: '100%',
      height: 52,
      minHeight: 52,
      maxHeight: 52,
      borderRadius: 24,
      backgroundColor: '#dddddd',
      marginVertical: 10,
      justifyContent: 'center',
    },
    input: {
      fontSize: 18,
      marginHorizontal: 12,
    }
})