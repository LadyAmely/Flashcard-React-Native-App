import { StyleSheet } from 'react-native';
import {COLORS} from "../../../styles/colors/variables.ts";

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: COLORS.cardBackground,
        borderTopWidth: 1,
        borderTopColor: COLORS.borderColor,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 16,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 10,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    menuItem: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
    },
    label: {
        fontSize: 13,
        color: COLORS.textSecondary,
        fontWeight: '600',
    },
});
