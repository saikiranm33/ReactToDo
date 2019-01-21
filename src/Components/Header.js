import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';



const Header = (props) => {
    return (
        <View style={styles.header}>
      
            <Text style={styles.headertext}>{props.title}</Text>     
                
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header : {
        backgroundColor : '#f26c1f',
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'center',
         height:50,
    },

    headertext : {
        fontSize : 18,
        color : 'white',
        alignSelf:"center",
        
    }
});