import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    counter: {
        fontSize: 16,
        marginBottom: 12,
    },
    card: {
        width: '100%',
        padding: 24,
        borderRadius: 12,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        marginBottom: 24,
    },
    question: {
        fontSize: 20,
        marginBottom: 12,
    },
    answer: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 12,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        gap: 16,
    },
});