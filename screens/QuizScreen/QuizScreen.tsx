import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import {styles} from "./quizScreenStyles.ts";

type QuizScreenRouteProp = RouteProp<RootStackParamList, 'QuizScreen'>;
type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'QuizScreen'>;

const QuizScreen = () => {
    const route = useRoute<QuizScreenRouteProp>();
    const navigation = useNavigation<QuizScreenNavigationProp>();

    const { flashcards } = route.params;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [knownCount, setKnownCount] = useState(0);

    const currentCard = flashcards[currentIndex];

    const handleKnow = () => {
        setKnownCount(knownCount + 1);
        goToNextCard();
    };

    const handleDontKnow = () => {
        goToNextCard();
    };

    const goToNextCard = () => {
        setShowAnswer(false);
        if (currentIndex + 1 < flashcards.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            navigation.goBack();
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.counter}>
                {currentIndex + 1} / {flashcards.length}
            </Text>

            <View style={styles.card}>
                <Text style={styles.question}>{currentCard.question}</Text>
                {showAnswer && <Text style={styles.answer}>{currentCard.answer}</Text>}
                {!showAnswer && (
                    <Button title="Pokaż odpowiedź" onPress={() => setShowAnswer(true)} />
                )}
            </View>

            {showAnswer && (
                <View style={styles.buttons}>
                    <Button title="Znam" onPress={handleKnow} />
                    <Button title="Nie znam" onPress={handleDontKnow} />
                </View>
            )}
        </View>
    );
};

export default QuizScreen;
