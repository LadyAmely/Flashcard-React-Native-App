import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { styles } from './quizScreenStyles';
import {useQuizLogic} from "./hooks.ts";


type QuizScreenRouteProp = RouteProp<RootStackParamList, 'QuizScreen'>;

const QuizScreen = () => {
    const route = useRoute<QuizScreenRouteProp>();
    const { flashcards } = route.params;

    const {
        currentIndex,
        currentCard,
        showAnswer,
        setShowAnswer,
        handleKnow,
        handleDontKnow,
    } = useQuizLogic(flashcards);

    return (
        <View style={styles.container}>
            <Text style={styles.counter}>
                Fiszka {currentIndex + 1} z {flashcards.length}
            </Text>

            <Text style={styles.quizTitle}>Sprawdź swoją wiedzę 📚</Text>

            <View style={styles.card}>
                <Text style={styles.question}>{currentCard.question}</Text>

                {showAnswer ? (
                    <>
                        <Text style={styles.answer}>{currentCard.answer}</Text>
                        <Text style={styles.subtleNote}>Czy znałeś tę odpowiedź?</Text>
                    </>
                ) : (
                    <>
                        <Text style={styles.hint}>
                            Spróbuj odpowiedzieć samodzielnie, a potem odkryj odpowiedź
                        </Text>
                        <TouchableOpacity style={styles.button} onPress={() => setShowAnswer(true)}>
                            <Text style={styles.buttonText}>Pokaż odpowiedź</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>

            {showAnswer && (
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={handleKnow}>
                        <Text style={styles.buttonText}>Znam</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={handleDontKnow}>
                        <Text style={styles.buttonText}>Nie znam</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default QuizScreen;
