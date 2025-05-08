import React from 'react';
import { View, Text, Button} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import {styles} from "./learningScreenStyles.ts";

type LearningScreenRouteProp = RouteProp<RootStackParamList, 'LearningScreen'>;

const LearningScreen = () => {
    const route = useRoute<LearningScreenRouteProp>();
    const { category } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Learning flashcards: {category}</Text>
            <Button title="Rozpocznij naukę" onPress={() => {}} />
        </View>
    );
};

export default LearningScreen;
