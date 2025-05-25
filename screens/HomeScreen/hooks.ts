import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { FlashcardModel} from '../../models/FlashcardModel';
import {FlashcardWithId} from "./types.ts";



export const useFlashcards = () => {
    const [flashcards, setFlashcards] = useState<FlashcardWithId[]>([]);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const flashcardModel = new FlashcardModel();

    const loadFlashcards = async () => {
        try {
            const cards = await flashcardModel.fetchFlashcardsWithId();
            setFlashcards(cards);
        } catch {
            Alert.alert('Błąd', 'Nie udało się pobrać fiszek.');
        }
    };

    useEffect(() => {
        loadFlashcards();
    }, []);

    const addFlashcard = async () => {
        try {
            await flashcardModel.addFlashcard(question, answer);
            setQuestion('');
            setAnswer('');
            setIsModalVisible(false);
            loadFlashcards();
        } catch {
            Alert.alert('Błąd', 'Nie udało się dodać fiszki.');
        }
    };

    const deleteFlashcard = async (id: string) => {
        try {
            await flashcardModel.deleteFlashcard(id);
            setFlashcards(prev => prev.filter(fc => fc.id !== id));
        } catch {
            Alert.alert('Błąd', 'Nie udało się usunąć fiszki.');
        }
    };

    return {
        flashcards,
        question,
        answer,
        isModalVisible,
        setQuestion,
        setAnswer,
        setIsModalVisible,
        addFlashcard,
        deleteFlashcard,
        loadFlashcards,
    };
};
