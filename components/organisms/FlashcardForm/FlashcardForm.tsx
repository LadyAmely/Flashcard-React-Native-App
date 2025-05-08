import React from 'react';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

interface FlashcardFormProps {
    question: string;
    answer: string;
    setQuestion: (text: string) => void;
    setAnswer: (text: string) => void;
    addFlashcard: () => void;
    closeModal: () => void;
}

const FlashcardForm: React.FC<FlashcardFormProps> = ({ question, answer, setQuestion, setAnswer, addFlashcard, closeModal }) => {
    return (
        <>
            <Input
                value={question}
                onChangeText={setQuestion}
                placeholder="Wpisz pytanie"
            />
            <Input
                value={answer}
                onChangeText={setAnswer}
                placeholder="Wpisz odpowiedź"
            />
            <Button
                title="Dodaj Fiszkę"
                onPress={addFlashcard}
            />
            <Button
                title="Zamknij"
                onPress={closeModal}
            />
        </>
    );
};

export default FlashcardForm;
