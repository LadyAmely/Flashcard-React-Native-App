import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors/variables';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.light.background,
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    list: {
        paddingBottom: 24,
    },
    notificationItem: {
        backgroundColor: COLORS.light.cardBackground,
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        shadowColor: COLORS.light.shadowColor,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    read: {
        backgroundColor: COLORS.light.hover,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.light.textPrimary,
        marginBottom: 6,
    },
    message: {
        fontSize: 14,
        color: COLORS.light.textSecondary,
        lineHeight: 20,
    },
    subtleNote: {
        fontSize: 14,
        color: COLORS.light.textSecondary,
        textAlign: 'center',
        marginTop: 12,
    },
});
