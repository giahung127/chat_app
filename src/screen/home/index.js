import { get, makeObservable, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import RoomCard from '../../components/RoomCard';
import Message from '../../models/messages';
import User from '../../models/user';

class Home extends Component {
  user = {}
  constructor(props) {
    super(props);
    this.userData = props.userData
    this.messageData = props.messageData
    this.user = this.getUser()
    makeObservable(this, {
      user: observable,
    })
  }

  getUser(){
    const {params} = this.props.route
    let user = this.userData.getOneUser(params.userName)
    if (!user){
      user = new User('0', params.userName, ['First Room', 'Second Room'])
      this.userData.addUser(user)
    }
    return user
  }

  gotoMessage(roomId){
    let messageList = this.messageData.getMessageList(roomId)
    if (messageList == 0){
      messageList = new Message(roomId, [])
      this.messageData.addNewMessageList(messageList)
    }
    this.props.navigation.navigate('message', {messageList: messageList.messagesList, user: this.user, roomId: roomId})
  }

  renderRoomItem(room){
    const {item} = room

    return(
      <View >
        <RoomCard roomId={item} gotoMessage={(roomId)=>this.gotoMessage(roomId)}/>
      </View>
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>
          <View style={{flex: 1}}>
          <Header/>
          <FlatList
            data = {this.user.roomList}
            renderItem={(data)=>this.renderRoomItem(data)}
          />
          </View>
      </View>
    );
  }
}

export default inject('userData','messageData')(observer(Home));
