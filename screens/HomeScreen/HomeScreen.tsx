import React, { useState } from 'react';
import { View, Modal, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FlashcardList from '../../components/organisms/FlashcardList/FlashcardList.tsx';
import FlashcardForm from '../../components/organisms/FlashcardForm/FlashcardForm.tsx';
import FabButton from '../../components/atoms/FabButton/FabButton.tsx';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/navigation";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;


const HomeScreen = () => {
    const [flashcards, setFlashcards] = useState<{ question: string; answer: string }[]>([]);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigation = useNavigation<HomeScreenNavigationProp>();


    const addFlashcard = () => {
        setFlashcards([...flashcards, { question, answer }]);
        setQuestion('');
        setAnswer('');
        setIsModalVisible(false);
    };

    const openModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const goToCategoryScreen = () => {
        navigation.navigate('CategoryScreen');
    };

    return (
        <View style={{ flex: 1, position: 'relative', padding: 20 }}>
            <FlashcardList flashcards={flashcards} />

            <Button title="Przejdź do kategorii" onPress={goToCategoryScreen} />

            <Modal visible={isModalVisible} animationType="slide" transparent={true} onRequestClose={closeModal}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
                        <FlashcardForm
                            question={question}
                            answer={answer}
                            setQuestion={setQuestion}
                            setAnswer={setAnswer}
                            addFlashcard={addFlashcard}
                            closeModal={closeModal}
                        />
                    </View>
                </View>
            </Modal>

            <FabButton onPress={openModal} />
        </View>
    );
};

export default HomeScreen;
