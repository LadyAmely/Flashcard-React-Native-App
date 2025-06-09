import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors/variables';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.light.background,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 24,
        textAlign: 'center',
        color: COLORS.light.textPrimary,
    },
});
