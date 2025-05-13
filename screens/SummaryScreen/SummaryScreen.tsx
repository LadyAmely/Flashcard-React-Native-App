import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import {styles} from "./summaryScreenStyles.ts";

type SummaryScreenRouteProp = RouteProp<RootStackParamList, 'SummaryScreen'>;

const SummaryScreen = () => {
    const route = useRoute<SummaryScreenRouteProp>();
    const { category, correctAnswers, totalQuestions } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Learning Summary: {category}</Text>
            <Text style={styles.stats}>
                Memorized flashcards: {correctAnswers}/{totalQuestions}
            </Text>
            <Text style={styles.stats}>
                Study time: 15 minutes
            </Text>

            <Button
                title="Rozpocznij quiz"
                onPress={() => {

                }}
            />
        </View>
    );
};


export default SummaryScreen;
