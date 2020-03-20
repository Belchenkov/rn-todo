import React from 'react';
import { StyleSheet, View } from "react-native";

const AppCard = ({ children, style }) => {
    return (
        <View style={ {...styles.default, ...style} }>
            { children }
        </View>
    );
};

const styles = StyleSheet.create({
    default: {
        width: '100%',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 2 },
        backgroundColor: '#fff',
        elevation: 8,
        borderRadius: 10
    }
});

export default AppCard;
