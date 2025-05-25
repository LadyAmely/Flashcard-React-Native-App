import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors/variables';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        backgroundColor: COLORS.background,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        color: COLORS.textPrimary,
        marginBottom: 20,
        textAlign: 'center',
    },
    emptyMessage: {
        textAlign: 'center',
        color: COLORS.textSecondary,
        fontSize: 16,
        marginTop: 30,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalContainer: {
        backgroundColor: COLORS.cardBackground,
        borderRadius: 16,
        padding: 20,
        width: '85%',
    },

    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 14,
        paddingHorizontal: 36,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom:40,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    buttonText: {
        color: COLORS.buttonText,
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
});
