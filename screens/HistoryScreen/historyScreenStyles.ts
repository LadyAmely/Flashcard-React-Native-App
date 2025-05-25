import {StyleSheet} from "react-native";
import { COLORS } from '../../styles/colors/variables';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 24,
        paddingTop: 32,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        color: COLORS.textPrimary,
        marginBottom: 20,
        textAlign: 'center',
    },
    entry: {
        backgroundColor: COLORS.cardBackground,
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 16,
        marginBottom: 16,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    date: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.textPrimary,
    },
    detail: {
        fontSize: 14,
        color: COLORS.textSecondary,
        marginTop: 6,
        lineHeight: 20,
    },
});
