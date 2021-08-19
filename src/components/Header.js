import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image, Text } from 'react-native';
import drawables from '../variants/drawables';
import InputRound from './InputRound';

export default function Header({ onChange }) {
  return (
    <View style={styles.root}>
        <Text style={styles.header}>Message</Text>
        <TouchableHighlight activeOpacity={0.8} onPress={() => onChange && onChange()}>
            <Image style={styles.send} source={{ uri: drawables.plus_icon }} />
        </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    paddingVertical: 15,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    marginBottom: 20,
},
  header:{
    flex: 1,
    textAlign: 'center',
    fontSize: 25
  },
  send: {
    width: 32,
    height: 32,
  }
})
