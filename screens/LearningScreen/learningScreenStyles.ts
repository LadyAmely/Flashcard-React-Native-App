import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors/variables';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 12,
        color: COLORS.textPrimary,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.textSecondary,
        textAlign: 'center',
        marginBottom: 24,
        paddingHorizontal: 10,
    },
    cardInfoBox: {
        backgroundColor: COLORS.cardBackground,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 30,
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    cardInfoNumber: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    cardInfoLabel: {
        fontSize: 16,
        color: COLORS.textSecondary,
        marginTop: 4,
    },
    quote: {
        fontSize: 16,
        fontStyle: 'italic',
        color: COLORS.textSecondary,
        marginBottom: 40,
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 14,
        paddingHorizontal: 36,
        borderRadius: 30,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
        alignItems: 'center',
    },
    buttonText: {
        color: COLORS.buttonText,
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});
