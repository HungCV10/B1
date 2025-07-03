import React from 'react'
import { StyleSheet, View } from 'react-native'

const WrapperScreen = ({children, backgroundColor= "blue"}) => {
  return (
    <View style= {[styles.container, {backgroundColor}]}>
        {children}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop : 50
    }
})
export default WrapperScreen