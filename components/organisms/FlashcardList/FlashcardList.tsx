import React from 'react';
import { ScrollView, Text} from 'react-native';
import Flashcard from '../../molecules/Flashcard/Flashcard';
import {styles} from './flashcardListStyles.ts';

interface FlashcardListProps {
    flashcards: { question: string; answer: string }[];
}

const FlashcardList: React.FC<FlashcardListProps> = ({ flashcards }) => {
    return (
        <ScrollView contentContainerStyle={styles.flashcardsContainer}>
            {flashcards.length > 0 ? (
                flashcards.map((flashcard, index) => (
                    <Flashcard key={index} question={flashcard.question} answer={flashcard.answer} />
                ))
            ) : (
                <Text>No flashcards to display</Text>
            )}
        </ScrollView>
    );
};



export default FlashcardList;
