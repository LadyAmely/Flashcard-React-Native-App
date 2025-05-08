import {StyleSheet} from "react-native";
import {COLORS} from "../../../styles/colors/variables.ts";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.buttonBackground,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: COLORS.buttonText,
        fontSize: 18,
        fontWeight: '600',
    },
});