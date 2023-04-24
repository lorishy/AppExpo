import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function NavbarTest({ navigation }) {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <View style={styles.nav}>
            <Text style={styles.navTitle}>Mon App</Text>
            <TouchableOpacity onPress={handleMenuToggle} style={styles.navButton}>
                <Text style={styles.navButtonText}>Menu</Text>
            </TouchableOpacity>
            {showMenu && (
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Connexion");
                    }}>
                        <Text style={styles.menuItem}>Connexion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Inscription");
                    }}>
                        <Text style={styles.menuItem}>Inscription</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Profil");
                    }}>
                        <Text style={styles.menuItem}>Profil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("pageTest");
                    }}>
                        <Text style={styles.menuItem}>Page test</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    nav: {
        height: 60,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        zIndex: 10
    },
    navTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    navButton: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 5,
    },
    navButtonText: {
        fontSize: 16,
    },
    menu: {
        position: 'absolute',
        zIndex: 20,
        top: 60,
        right: 0,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderRadius: 5,
        padding: 10,
    },
    menuItem: {
        fontSize: 16,
        paddingVertical: 5,
    },
});