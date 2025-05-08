import { useState, useEffect } from 'react';
import { FlashcardModel, Flashcard } from '../models/FlashcardModel';

export const useFlashcardViewModel = () => {
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    const [status, setStatus] = useState<string>('');
    const [question, setQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');
    const flashcardModel = new FlashcardModel();

    useEffect(() => {
        fetchFlashcards();
    }, []);

    const fetchFlashcards = async () => {
        try {
            const fetchedFlashcards = await flashcardModel.fetchFlashcards();
            setFlashcards(fetchedFlashcards);
        } catch (error) {
            setStatus('❌ Błąd przy pobieraniu fiszek');
        }
    };

    const addFlashcard = async () => {
        if (!question || !answer) {
            setStatus('❌ Wypełnij wszystkie pola!');
            return;
        }

        try {
            await flashcardModel.addFlashcard(question, answer);
            setStatus('✅ Dodano fiszkę!');
            setQuestion('');
            setAnswer('');
            fetchFlashcards();
        } catch (error) {
            setStatus('❌ Błąd przy dodawaniu');
        }
    };

    return {
        flashcards,
        status,
        question,
        answer,
        setQuestion,
        setAnswer,
        addFlashcard,
        fetchFlashcards
    };
};
