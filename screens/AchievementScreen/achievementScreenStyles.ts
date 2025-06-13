import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors/variables';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.light.background,
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.light.textPrimary,
        marginBottom: 6,
    },
    description: {
        fontSize: 14,
        color: COLORS.light.textSecondary,
        marginBottom: 12,
        lineHeight: 20,
    },
    progressText: {
        marginTop: 4,
        fontSize: 14,
        color: COLORS.light.success,
        fontWeight: '600',
    },
});
