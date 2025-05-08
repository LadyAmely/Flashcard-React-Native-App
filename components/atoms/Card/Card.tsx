import React from 'react';
import { View, StyleSheet } from 'react-native';
import {styles} from "./cardStyles.ts";

interface CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return <View style={styles.card}>{children}</View>;
};


export default Card;
