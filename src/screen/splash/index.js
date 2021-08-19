import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import * as Anim from 'react-native-animatable'
import styles from '../login/styles';
import drawables from '../../variants/drawables';
class Splash extends Component {

    componentDidMount(){
        setTimeout(this.onComplete.bind(this), 2000)

    }
    onComplete (){
        this.props.navigation.navigate('login');
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.safea} />
                <View style={styles.root}>
                    <Anim.View animation={'tada'}>
                        
                        <Image source={{ uri: drawables.logo_login }} style={styles.image} />
                        <Text style={styles.text}>Loading...</Text>
                    </Anim.View>
                </View>
            </View>
        );
    }
}

export default Splash;
