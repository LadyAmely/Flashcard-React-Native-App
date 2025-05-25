import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../styles/colors/variables';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 60,
    },
    slide: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 60,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: COLORS.textPrimary,
        textAlign: 'center',
        marginBottom: 12,
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.textSecondary,
        textAlign: 'center',
        marginHorizontal: 16,
        lineHeight: 22,
    },
});
