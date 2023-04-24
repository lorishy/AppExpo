import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@gmail.com');
    const [phone, setPhone] = useState('123-456-7890');
    const [bio, setBio] = useState('Je suis un développeur web passionné qui adore apprendre de nouvelles choses.');

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Image
                    source={{ uri: 'https://i.pravatar.cc/150' }}
                    style={styles.profilePicture}
                />
                <Text style={styles.profileName}>{name}</Text>
                <Text style={styles.profileEmail}>{email}</Text>
            </View>
            <View style={styles.profileBody}>
                <View style={styles.profileSection}>
                    <Text style={styles.profileSectionTitle}>Informations personnelles</Text>
                    <View style={styles.profileSectionRow}>
                        <Text style={styles.profileSectionLabel}>Nom:</Text>
                        <Text style={styles.profileSectionValue}>{name}</Text>
                    </View>
                    <View style={styles.profileSectionRow}>
                        <Text style={styles.profileSectionLabel}>Email:</Text>
                        <Text style={styles.profileSectionValue}>{email}</Text>
                    </View>
                    <View style={styles.profileSectionRow}>
                        <Text style={styles.profileSectionLabel}>Téléphone:</Text>
                        <Text style={styles.profileSectionValue}>{phone}</Text>
                    </View>
                </View>
                <View style={styles.profileSection}>
                    <Text style={styles.profileSectionTitle}>Biographie</Text>
                    <Text style={styles.profileSectionValue}>{bio}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 20,
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    profileEmail: {
        fontSize: 16,
        color: '#777',
    },
    profileBody: {
        width: '100%',
        padding: 20,
    },
    profileSection: {
        marginBottom: 20,
    },
    profileSectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    profileSectionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    profileSectionLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    profileSectionValue: {
        fontSize: 16,
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: '#2e86de',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',

    }
})