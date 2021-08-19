import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  root: {
    backgroundColor: 'white',
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text_header: {
    marginTop: 30,
    fontSize: 30,
    textAlignVertical:'top',
    fontWeight: 'bold'
  },
  image: {
    width: 320,
    height:320,
    resizeMode:'cover'
  },
  input: {
    width: "70%"
  },
  btn: {
      borderRadius:25,
      width: 300,
      height: 40,
      marginTop: 20,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'
  },
  btn_text:{
    color:'white',
    fontSize: 16,
    textAlignVertical:'top',
    fontWeight: 'bold'
  }
})

export default styles;
