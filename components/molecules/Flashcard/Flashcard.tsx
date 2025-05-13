import React, { useState } from 'react';
import Card from '../../atoms/Card/Card';
import Question from '../../atoms/Question/Question';
import Answer from '../../atoms/Answer/Answer';
import Button from '../../atoms/Button/Button';

interface FlashcardProps {
    question: string;
    answer: string;
    index: number;
    onDelete: (index: number) => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer, index, onDelete }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    return (
        <Card>
            <Question question={question} />
            {showAnswer && <Answer answer={answer} />}
            <Button
                onPress={() => setShowAnswer(!showAnswer)}
                title={showAnswer ? 'Ukryj odpowiedź' : 'Wyświetl odpowiedź'}
            />
            <Button
                onPress={() => onDelete(index)}
                title="Usuń"
            />
        </Card>
    );
};


export default Flashcard;
