import { StyleSheet } from 'react-native';
import { COLORS } from '../../../styles/colors/variables';

export const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 20,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    buttonText: {
        color: COLORS.buttonText,
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});
