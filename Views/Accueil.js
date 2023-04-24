import React from 'react';
import { View, Text, StyleSheet, Image, scr, ScrollView } from 'react-native';
import Footer from '../Components/Footer';

const HScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Bienvenue</Text>
                </View>
                <View style={styles.content}>
                    <Image source={require('../assets/menu.jpg')} style={styles.image} />
                    <Text style={styles.text}>
                        Bienvenue sur notre nouvelle application mobile ! Avec notre interface conviviale, vous pouvez facilement accéder à toutes les fonctionnalités dont vous avez besoin, depuis n'importe où.
                    </Text>
                    <Image source={require('../assets/image1.jpg')} style={styles.image} />
                    <Text style={styles.text}>
                        Merci d'avoir visité notre application mobile ! Nous espérons que vous avez apprécié votre expérience et que notre application a répondu à toutes vos attentes. Nous sommes toujours à l'écoute de vos commentaires et de vos suggestions pour améliorer notre service. Encore une fois, merci de votre visite et nous espérons vous revoir bientôt sur notre application !
                    </Text>
                </View>
                <Footer />
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#EAEAEA',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        padding: 10,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    text: {
        marginBottom: 10,
        fontSize: 16,
        lineHeight: 24,
    },
});

export default HScreen;
