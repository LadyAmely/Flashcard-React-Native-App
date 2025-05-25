

import { StyleSheet } from 'react-native';
import { COLORS } from '../../../styles/colors/variables';

export const styles = StyleSheet.create({
    iconButton: {
        position: 'absolute',
        top: 12,
        left: 12,
        zIndex: 10,
        padding: 8,
        backgroundColor: COLORS.background,
        borderRadius: 24,
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        paddingHorizontal: 20,
    },
    modal: {
        backgroundColor: COLORS.cardBackground,
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 16,
        width: '80%',
        shadowColor: COLORS.shadowStrong,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 6,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 16,
    },
    modalOption: {
        paddingVertical: 14,
        fontSize: 16,
        color: COLORS.textPrimary,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.borderColor,
    },
});
