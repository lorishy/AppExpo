import { Text, StyleSheet } from "react-native";

export default function Nom(props) {
    return (
        <Text style={styles.textBold}>{props.nom}</Text>
    );
};

const styles = StyleSheet.create({
    textBold: {
        fontWeight: 'bold'
    }
});