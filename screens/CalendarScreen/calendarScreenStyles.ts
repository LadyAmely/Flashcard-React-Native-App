import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors/variables';

export const calendarStyles = StyleSheet.create({
    container: {
        padding: 16,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: COLORS.light.textPrimary,
    },
});
