import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import * as firebase from "firebase";

export default function Header(){
    
    return(
        <View style={styles.header}>
            <Text style={styles.title}>ToDos</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        height:'100%',
        width: '100%',
        backgroundColor: '#CC6600',
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1
    }
})