
import { StyleSheet } from 'react-native';
import { COLORS } from '../../../styles/colors/variables';

export const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.buttonBackground,
        paddingVertical: 14,
        paddingHorizontal: 25,
        borderRadius: 30,
        marginTop: 30,
        shadowColor: COLORS.buttonBackground,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    buttonText: {
        color: COLORS.buttonText,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600',
    },
});

