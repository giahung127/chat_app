import { action, makeObservable, observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Image, View, Text, FlatList, SafeAreaView, ScrollView, TouchableHighlight } from 'react-native';
import ChatSend from '../../components/ChatSend';
import ReceiveMessage from '../../components/ReceiveMessage';
import SendMessage from '../../components/SendMessage';
import moment from 'moment'
import SocketIOClient from 'socket.io-client'
import styles from '../message/styles';
import drawables from '../../variants/drawables';
import MessageData from '../../models/message_data'

class Message extends Component {
    
    content = ''
    messageList = [];
    user = {}
    roomId = ''

    constructor(props) {
        super(props);
        this.messageData = props.messageData    
        const {params} = this.props.route
        this.messageList = params.messageList
        this.user = params.user
        this.roomId = params.roomId
        console.log(this.messageList)
        makeObservable(this , {
            content: observable,
            setMessage: action,
            messageList: observable
        })
        this.initConnection()
    }

    componentDidMount() {
        
    }
    
    disconnect() {
        if (this.socketClient) {
          this.socketClient.disconnect()
          this.socketClient = null;
        }
    }

    initConnection(){
        this.disconnect()

        if(!this.user) return;
        const SERVER_POOL_URL = 'http://10.0.2.2:8080';

        var thiz = this;
        this.socketClient = SocketIOClient(SERVER_POOL_URL, {
            reconnectionDelayMax: 10000,
        });
        this.socketClient.on('connected', function (data){
            thiz.sessionID = data.sessionID
            console.log('connected', data)
            thiz.socketClient.emit('room',{room: thiz.roomId, user: thiz.user.userId, name: thiz.user.username})
        })

        this.socketClient.on('joined', function(data) {
            console.log('joined', data)
        })

        this.socketClient.on('online', function (data){
            console.log('online', data)
        })

        this.socketClient.on('offline', function (data) {
            console.log('offline', data)
        })

        this.socketClient.on('message', function (data) {
            thiz.messageList.push(data)
            thiz.setState({})
        })
    }

    setMessage(text){
        this.content= text
    }

    onSend(){
        if (!this.content || this.content.trim().length == 0) return
        const data = {
            room: this.roomId,
            message: this.content,
            userId: this.user.userId,
            username: this.user.username,
        }
        this.socketClient.emit('message', data)
        const date = moment().format('MM/DD/YY')
        const time = moment().format('hh:mm A')
        let messageData = new MessageData(this.content, this.user.username, date, time)
        this.messageList.push(messageData)
        this.setMessage('');
    }

    onSave(){
        this.messageData.saveMessage(this.messageList, this.roomId)
        this.props.navigation.goBack()
    }

    renderChatItem({item}){
        const { content, date } = item
        return(
            <View>
                {
                    item.userName == this.user.username
                    ? <SendMessage message={content} date={date}/>
                    : <ReceiveMessage message={content} date={date}/>
                }
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.root}>
                    <TouchableHighlight activeOpacity={0.8} onPress={this.onSave.bind(this)}>
                        <Image style={styles.send} source={{ uri: drawables.back_icon }} />
                    </TouchableHighlight>
                    <Text style={styles.header}>{this.roomId}</Text>
                </View>
                <View style={{flex: 1}}>
                    <FlatList
                        data={this.messageList}
                        renderItem={(data)=>this.renderChatItem(data)}
                    /> 
                    <ChatSend
                        value={this.content || ''}
                        onChange={(text) => this.setMessage(text)}
                        onSend={() => this.onSend()}
                    />
                </View> 
            </View>
        );
    }
}

export default inject('messageData')(observer(Message));
