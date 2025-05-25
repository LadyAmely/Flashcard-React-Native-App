import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './inputStyles';
import { COLORS } from '../../../styles/colors/variables';

interface InputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({ value, onChangeText, placeholder }) => {
    return (
        <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={COLORS.textSecondary}
        />
    );
};

export default Input;

