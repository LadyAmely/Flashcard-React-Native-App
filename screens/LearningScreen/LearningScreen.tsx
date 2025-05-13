import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';
import { styles } from './learningScreenStyles.ts';

type LearningScreenRouteProp = RouteProp<RootStackParamList, 'LearningScreen'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'LearningScreen'>;

const LearningScreen = () => {
    const route = useRoute<LearningScreenRouteProp>();
    const navigation = useNavigation<NavigationProp>();

    const { flashcards } = route.params;

    const startQuiz = () => {
        navigation.navigate('QuizScreen', { flashcards });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nauka {flashcards.length} fiszek</Text>
            <Button title="Rozpocznij naukę" onPress={startQuiz} />
        </View>
    );
};

export default LearningScreen;
