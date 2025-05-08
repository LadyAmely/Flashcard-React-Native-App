
import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import {styles} from './buttonStyles.ts';

interface ButtonProps {
    onPress: () => void;
    title: string;
}

const Button: React.FC<ButtonProps> = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};


export default Button;


