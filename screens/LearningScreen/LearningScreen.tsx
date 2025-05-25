import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';
import { styles } from './learningScreenStyles';

type LearningScreenRouteProp = RouteProp<RootStackParamList, 'LearningScreen'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'LearningScreen'>;

const LearningScreen = () => {
    const route = useRoute<LearningScreenRouteProp>();
    const navigation = useNavigation<NavigationProp>();

    const { flashcards } = route.params;

    const startQuiz = () => {
        navigation.navigate('QuizScreen', { flashcards });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nauka fiszek</Text>

            <Text style={styles.subtitle}>
                Przygotuj się do quizu! Masz {flashcards.length} fiszek do przećwiczenia.
            </Text>

            <View style={styles.cardInfoBox}>
                <Text style={styles.cardInfoNumber}>{flashcards.length}</Text>
                <Text style={styles.cardInfoLabel}>Fiszki</Text>
            </View>

            <Text style={styles.quote}>Gotowa/y do nauki? 🚀</Text>

            <TouchableOpacity style={styles.button} onPress={startQuiz}>
                <Text style={styles.buttonText}>Rozpocznij naukę</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LearningScreen;
