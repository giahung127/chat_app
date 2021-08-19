import React from 'react';
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import drawables from '../variants/drawables';
import InputRound from './InputRound';

export default function ChatSend({ value, onChange, onSend }) {
  return (
    <View style={styles.root}>
      <View style={styles.input}>
        <InputRound password ={false} value={value} onChangeText={(text) => onChange && onChange(text)} />
      </View>
      <TouchableHighlight activeOpacity={0.8} onPress={() => onSend && onSend()}>
        <Image style={styles.send} source={{ uri: drawables.send_icon }} />
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
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  send: {
    width: 32,
    height: 32,
  }
})
