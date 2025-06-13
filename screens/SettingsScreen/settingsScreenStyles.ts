import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors/variables';

export const styles = StyleSheet.create({
    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderRadius: 12,
        backgroundColor: COLORS.light.cardBackground,
        shadowColor: COLORS.light.shadowColor,
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 2,
        marginTop: 16,
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 32,
    },
    title: {
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 24,
        textAlign: 'center',
    },
});
