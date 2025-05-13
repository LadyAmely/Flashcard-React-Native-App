import React from 'react';
import { ScrollView, Text} from 'react-native';
import Flashcard from '../../molecules/Flashcard/Flashcard';
import {styles} from './flashcardListStyles.ts';

interface FlashcardListProps {
    flashcards: { question: string; answer: string }[];
    deleteFlashcard: (index: number) => void;
}


const FlashcardList: React.FC<FlashcardListProps> = ({ flashcards, deleteFlashcard }) => {
    return (
        <ScrollView contentContainerStyle={styles.flashcardsContainer}>
            {flashcards.length > 0 ? (
                flashcards.map((flashcard, index) => (
                    <Flashcard
                        key={index}
                        index={index}
                        question={flashcard.question}
                        answer={flashcard.answer}
                        onDelete={deleteFlashcard}
                    />

                ))
            ) : (
                <Text>No flashcards to display</Text>
            )}
        </ScrollView>
    );
};



export default FlashcardList;
