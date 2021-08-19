import React, { Component } from 'react';
import { Image, StyleSheet, Text , TouchableOpacity, View } from 'react-native';
import drawables from '../variants/drawables';

export default function RoomCard({roomId, gotoMessage}){
    return(
        <TouchableOpacity style={styles.root} onPress={()=>gotoMessage(roomId)}>
            <Image source={{uri:drawables.user_logo }} style={styles.image}/>
            <View style={styles.container}>
                <Text style={styles.body}>{roomId}</Text>                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical: 5,
    marginHorizontal: 10,
    width:'95%',
    height:80,
    paddingVertical: 5,
    paddingLeft: 10,
    backgroundColor:'white',
    borderRadius: 20
  },
  container: {
    flexWrap: 'wrap',
    width:'70%',
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },
  body: {
    fontSize: 20,
    color: 'black',
  },
  image:{
    width: 50,
    height: 50
  }
})