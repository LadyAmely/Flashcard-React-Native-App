
import { StyleSheet } from 'react-native';
import { COLORS } from '../../../styles/colors/variables';

export const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
    fabText: {
        color: COLORS.buttonText,
        fontSize: 30,
        lineHeight: 60,
    },
});
