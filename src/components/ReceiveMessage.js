import React, { Component } from 'react';
import { StyleSheet, Text , View } from 'react-native';
export default function ReceiveMessage({message, date}){
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
    marginVertical: 6,
    maxWidth:'80%',
    marginLeft: 12
  },
  bubble: {
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#Ff93d9'
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