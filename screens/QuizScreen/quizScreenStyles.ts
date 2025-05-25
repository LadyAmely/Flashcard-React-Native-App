

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
    counter: {
        fontSize: 16,
        color: COLORS.textSecondary,
        marginBottom: 16,
    },
    quizTitle: {
        fontSize: 22,
        fontWeight: '700',
        color: COLORS.textPrimary,
        marginBottom: 16,
        textAlign: 'center',
    },
    hint: {
        fontSize: 14,
        color: COLORS.textSecondary,
        marginTop: 12,
        marginBottom: 20,
        textAlign: 'center',
        fontStyle: 'italic',
    },
    subtleNote: {
        fontSize: 14,
        color: COLORS.textSecondary,
        marginTop: 12,
        textAlign: 'center',
    },

    card: {
        width: '100%',
        backgroundColor: COLORS.cardBackground,
        borderRadius: 16,
        padding: 24,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        marginBottom: 32,
        alignItems: 'center',
    },
    question: {
        fontSize: 22,
        color: COLORS.textPrimary,
        fontWeight: '600',
        textAlign: 'center',
    },
    answer: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.success,
        marginTop: 16,
        textAlign: 'center',
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 14,
        paddingHorizontal: 28,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 16,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 2,
    },
    buttonText: {
        color: COLORS.buttonText,
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
    buttons: {
        flexDirection: 'row',
        gap: 16,
    },
});
