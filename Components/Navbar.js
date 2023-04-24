import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export default function Navbar({ navigation }) {
    return (
        <View style={styles.nav}>
            <View style={styles.navItem}>
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => {
                        navigation.navigate("Accueil");
                    }}
                >
                    <Text style={styles.navButtonText}>Accueil</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.navItem}>
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => {
                        navigation.navigate("Connexion");
                    }}
                >
                    <Text style={styles.navButtonText}>Connexion</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.navItem, styles.lastNavItem]}>
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => {
                        navigation.navigate("Inscription");
                    }}
                >
                    <Text style={styles.navButtonText}>Inscription</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.navItem, styles.lastNavItem]}>
                <TouchableOpacity
                    style={styles.navButton}
                    onPress={() => {
                        navigation.navigate("Réglages");
                    }}
                >
                    <Text style={styles.navButtonText}>Réglages</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#f1f1f1",
    },
    navItem: {
        flex: 1,
        marginHorizontal: 10,
    },
    lastNavItem: {
        marginHorizontal: 0,
    },
    navButton: {
        backgroundColor: "#2e86de",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    navButtonText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 16,
    },
});
