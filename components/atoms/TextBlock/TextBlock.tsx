import React from 'react';
import {Text} from 'react-native';
import {styles} from "./textBlockStyles.ts";

const TextBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Text style={styles.text}>{children}</Text>;
};


export default TextBlock;

