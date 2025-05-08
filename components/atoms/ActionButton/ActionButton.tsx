import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import {styles} from "./actionButtonStyles.ts";

interface ActionButtonProps {
    onPress: () => void;
    label: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onPress, label }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
};



export default ActionButton;
