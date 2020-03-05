import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Navbar = ({ title }) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#5d4037',
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
})
