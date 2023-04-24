import { Text, StyleSheet } from "react-native";

export default function Prenom(props) {
    return (
        <Text style={styles.textItalic}>{props.prenom}</Text>
    );
};

const styles = StyleSheet.create({
    textItalic: {
        fontStyle: 'italic',
        fontSize: 50
    }
});