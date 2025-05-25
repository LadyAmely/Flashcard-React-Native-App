import { StyleSheet } from 'react-native';
import { COLORS } from '../../../styles/colors/variables';

export const styles = StyleSheet.create({
    input: {
        backgroundColor: COLORS.cardBackground,
        borderColor: COLORS.borderColor,
        borderWidth: 1,
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        color: COLORS.textPrimary,
        marginBottom: 16,

        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 1,
    },
});
