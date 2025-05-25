
import { StyleSheet } from 'react-native';
import { COLORS } from '../../../styles/colors/variables';

export const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.buttonBackground,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: COLORS.buttonText,
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});
