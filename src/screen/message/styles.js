import { StyleSheet } from 'react-native'

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
      width: 20,
      height: 20,
    }
  })
  
export default styles;
