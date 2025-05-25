
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {RootStackParamList} from "../../types/navigation";
import {StatsModel} from "../../models/StatsModel.ts";


export const useQuizLogic = (flashcards: { question: string; answer: string }[]) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'QuizScreen'>>();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [knownCount, setKnownCount] = useState(0);
    const [knownFlashcards, setKnownFlashcards] = useState<string[]>([]);

    const currentCard = flashcards[currentIndex];
    const statsModel = new StatsModel();

    const handleKnow = async () => {
        await statsModel.addSingleStat(true);
        setKnownCount((prev) => prev + 1);
        setKnownFlashcards((prev) => [...prev, currentCard.question]);
        goToNextCard();
    };


    const handleDontKnow = async () => {
        await statsModel.addSingleStat(false);
        goToNextCard();
    };


    const goToNextCard = async () => {
        const isLastCard = currentIndex + 1 >= flashcards.length;

        if (isLastCard) {
            const today = new Date().toISOString().split('T')[0];
            const existingStatsJson = await AsyncStorage.getItem('flashcardStats');
            const stats = existingStatsJson ? JSON.parse(existingStatsJson) : [];

            const updatedStats = [
                ...stats,
                {
                    date: today,
                    correct: knownCount,
                    total: flashcards.length,
                },
            ];

            await AsyncStorage.setItem('flashcardStats', JSON.stringify(updatedStats));

            const knownJson = await AsyncStorage.getItem('knownFlashcards');
            const knownSet = knownJson ? new Set(JSON.parse(knownJson)) : new Set();
            const merged = new Set([...knownSet, ...knownFlashcards]);
            await AsyncStorage.setItem('knownFlashcards', JSON.stringify([...merged]));

            navigation.navigate('StatsScreen', {
                correct: knownCount,
                total: flashcards.length,
            });
        } else {
            setCurrentIndex((prev) => prev + 1);
            setShowAnswer(false);
        }
    };

    return {
        currentIndex,
        currentCard,
        showAnswer,
        setShowAnswer,
        handleKnow,
        handleDontKnow,
    };
};
