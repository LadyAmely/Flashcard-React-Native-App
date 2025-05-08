import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import {styles} from "./fabButtonStyles.ts";

interface FabButtonProps {
    onPress: () => void;
}

const FabButton: React.FC<FabButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.fab} onPress={onPress}>
            <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
    );
};


export default FabButton;
