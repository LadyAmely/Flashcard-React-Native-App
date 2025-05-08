import React, { useState } from 'react';
import Card from '../../atoms/Card/Card';
import Question from '../../atoms/Question/Question';
import Answer from '../../atoms/Answer/Answer';
import Button from '../../atoms/Button/Button';

interface FlashcardProps {
    question: string;
    answer: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <Card>
            <Question question={question} />
            {showAnswer && <Answer answer={answer} />}
            <Button onPress={toggleAnswer} title={showAnswer ? 'Ukryj odpowiedź' : 'Wyświetl odpowiedź'} />
        </Card>
    );
};

export default Flashcard;
