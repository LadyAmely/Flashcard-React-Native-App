import React from 'react';
import { Text} from 'react-native';
import {styles} from './questionStyles.ts';

interface QuestionProps {
    question: string;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
    return <Text style={styles.question}>{question}</Text>;
};


export default Question;
