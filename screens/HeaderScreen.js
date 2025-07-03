import React from 'react'
import { TouchableOpacity, StyleSheet, Image, Text, View } from 'react-native';

const HeaderScreen = ({
    title,
    iconLeft,
    iconRight,
    onPressLeft,
    onPressRight,
    centerComponent,
    leftComponent,
    rightComponent,
    backgroundColor = "lightblue"
}) => {
    const renderLeft = ()=>{
        if(leftComponent) return leftComponent;
        if(iconLeft){
            return(
                <TouchableOpacity onPress={onPressLeft}>
                    <Image source={iconLeft} style= {styles.icon}></Image>
                </TouchableOpacity>
            )
        }
    }
        const renderRight = ()=>{
        if(rightComponent) return rightComponent;
        if(iconRight){
            return(
                <TouchableOpacity onPress={onPressRight}>
                    <Image source={iconRight} style= {styles.icon}></Image>
                </TouchableOpacity>
            )
        }
    }

    const renderCenter = ()=>{
            if(centerComponent) return centerComponent;
            return <Text style= {styles.title}>{title}</Text>
        }
  return (
    <View style= {[styles.header, {backgroundColor}]}>
        {renderLeft()}
        {renderCenter()}
        {renderRight()}
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    icon: {
        width: 32,
        height: 32
    },
    title: {
        alignItems: "center",
        color: "black",
        textAlign : "center"
    }
})

export default HeaderScreen