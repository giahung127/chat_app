import { makeObservable, observable, observe } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import drawables from '../../variants/drawables';
import styles from './styles';
import { configure } from "mobx"
import InputRound from '../../components/InputRound';

configure({
  enforceActions: "never",
})
class Login extends Component {
    onChangeUserName = '';
    onChangePassword = '';
    
    constructor(props) {
      super(props);
      makeObservable(this, {
        onChangeUserName: observable,
        onChangePassword: observable
      })
    }

    setUsername(text){
      this.onChangeUserName = text
    }

    setPassword(text){
      this.onChangePassword = text
    }

    gotoHome(){
      this.props.navigation.navigate('home', {userName: this.onChangeUserName});
    }

    render() {
        return (
          <ScrollView>
            <View style={styles.root}>
            <Text style={styles.text_header}> Welcome back to </Text>
            <Image source={{uri: drawables.logo_login}} style={styles.image}/>
            <Text> Please enter your account infomation</Text>
            <View style={styles.input}>
            <InputRound password={false} placeholder="Username" value={this.onChangeUserName} onChangeText={(text) => this.setUsername(text)}/>
            <InputRound password={true} placeholder="Password" value={this.onChangeUserPassword} onChangeText={(text) => this.setPassword(text)}/>
            </View>
            <TouchableOpacity style={styles.btn} onPress={this.gotoHome.bind(this)}>
            <Text style={styles.btn_text}>Login</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
  }
}
observer(Login)
export default Login;
