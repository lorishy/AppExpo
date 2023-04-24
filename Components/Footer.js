import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>© My App 2023 - All rights reserved</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        padding: 10,
        backgroundColor: '#EAEAEA',
        borderTopWidth: 1,
        borderTopColor: '#CCCCCC',
    },
    text: {
        fontSize: 12,
        color: '#555555',
        textAlign: 'center',
    },
});

export default Footer;
