import React, { Component } from 'react';
import {View,StyleSheet, Text} from 'react-native'

export default function SendMessage({ message, date }){
    return(
        <View style={styles.root}>
            <View style={styles.bubble}>
                <Text style={styles.body}>{message}</Text>
                {!!date && <Text style={styles.date}>{date}</Text>}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 6,
    marginRight: 12
  },
  bubble: {
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#2596be'
  },
  body: {
    fontSize: 18,
    color: 'white',
  },
  date: {
    fontSize: 12,
    color: '#bdbdbd',
  }
})