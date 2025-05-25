import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors/variables';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 60,
        backgroundColor: COLORS.background,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        marginBottom: 24,
        color: COLORS.textPrimary,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        color: COLORS.textSecondary,
        marginBottom: 10,
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: COLORS.cardBackground,
        borderRadius: 12,
        width: '100%',
        textAlign: 'center',
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    chart: {
        marginTop: 30,
        borderRadius: 20,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },
    resetButton: {
        marginTop: 30,
        backgroundColor: COLORS.secondary,
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 30,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        alignItems: 'center',
    },
    resetButtonText: {
        color: COLORS.buttonText,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },

});
