import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';
import Nom from './Components/Nom.js';
import Prenom from './Components/Prenom.js';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navbar from './Components/Navbar.js';
import LoginScreen from './Login.js';
import HScreen from './Views/Accueil.js';
import NavbarTest from './Navbartest.js';
import SignupScreen from './Views/Inscription.js';
import ProfileScreen from './Views/Profil.js';

// Screen de l'accueil
function AccueilScreen({ navigation }) {
  return (
    <View>
      <StatusBar style="auto" />
      <NavbarTest navigation={navigation} />
      <HScreen />
    </View>
  )
}

// Screen  avec le bouton go to detail quand on appuie sur le bouton home
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}
// Screen avec le bouton go to compteur quand on a ppuie sur le bouton Go to détail
function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
      <Text>Details Screen</Text>
      <Button
        title="Go to page compteur"
        onPress={() => navigation.navigate('pageTest')}
      />
    </View>
  );
}

// Screen avec le compteur une fois qu'on a cliqué sur le bouton Go to page compteur
function PageTest({ navigation }) {

  const [compteur, setCompteur] = useState(0)
  const [lastbtn, setlastbtn] = useState("")
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.divNom}>
        <Nom nom="HASLAY" />
      </View>
      <View style={styles.divPre}>
        <Prenom prenom="Loris" />
      </View>
      <Text>Mon compteur est : {compteur}</Text>
      <Button title='Incrémenter' onPress={() => { setCompteur(compteur + 1); setlastbtn("Incrémenter") }} />
      <Button title='Décrementer' onPress={() => { setCompteur(compteur - 1); setlastbtn("Décrémenter") }} />
      <Text>Le dernier bouton utilisé est le bouton {lastbtn}</Text>
      <Button title="Retour à la page d'acceuil" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}
// Screen de la page login
function ScreenLogin({ navigation }) {
  return LoginScreen()

}
// Screen de la page d'inscription
function ScreenInscription({ navigation }) {
  return SignupScreen()
}
// Screen de la page d'inscription
function ScreenProfil({ navigation }) {
  return ProfileScreen()
}
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Navbar'>
        <Stack.Screen name='Accueil' component={AccueilScreen}></Stack.Screen>
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='Detail' component={DetailScreen}></Stack.Screen>
        <Stack.Screen name='pageTest' component={PageTest}></Stack.Screen>
        <Stack.Screen name='Connexion' component={ScreenLogin}></Stack.Screen>
        <Stack.Screen name='Inscription' component={ScreenInscription}></Stack.Screen>
        <Stack.Screen name='Profil' component={ScreenProfil}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divNom: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 25

  },
  divPre: {
    backgroundColor: 'red',
    padding: 30,
    borderRadius: 25

  },
});
