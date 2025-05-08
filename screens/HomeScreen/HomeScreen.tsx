import React, { useState } from 'react';
import { View, Modal} from 'react-native';
import FlashcardList from '../../components/organisms/FlashcardList/FlashcardList.tsx';
import FlashcardForm from '../../components/organisms/FlashcardForm/FlashcardForm.tsx';
import FabButton from '../../components/atoms/FabButton/FabButton.tsx';

const HomeScreen = () => {
    const [flashcards, setFlashcards] = useState<{ question: string; answer: string }[]>([]);
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

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

    return (
        <View style={{ flex: 1, position: 'relative', padding: 20 }}>
            <FlashcardList flashcards={flashcards} />
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
