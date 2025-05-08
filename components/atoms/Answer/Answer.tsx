import React from 'react';
import { Text} from 'react-native';
import {styles} from './answerStyles.ts';

interface AnswerProps {
    answer: string;
}

const Answer: React.FC<AnswerProps> = ({ answer }) => {
    return <Text style={styles.answer}>{answer}</Text>;
};


export default Answer;
