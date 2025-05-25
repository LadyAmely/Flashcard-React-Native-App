import React from 'react';
import {View, Modal, Button, TouchableOpacity, Text, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FlashcardList from '../../components/organisms/FlashcardList/FlashcardList';
import FlashcardForm from '../../components/organisms/FlashcardForm/FlashcardForm';
import FabButton from '../../components/atoms/FabButton/FabButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';
import { useFlashcards } from './hooks.ts';
import {styles} from "./HomeScreenStyles.ts";
import BottomMenu from "../../components/atoms/BottomMenu/BottomMenu.tsx";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const {
        flashcards,
        question,
        answer,
        isModalVisible,
        setQuestion,
        setAnswer,
        setIsModalVisible,
        addFlashcard,
        deleteFlashcard,
    } = useFlashcards();

    const openModal = () => setIsModalVisible(true);
    const closeModal = () => setIsModalVisible(false);

    const goToCategoryScreen = () => {
        navigation.navigate('LearningScreen', { flashcards });
    };

    const menuItems = [
        { label: 'Home', onPress: () => navigation.navigate("HomeScreen") },
        { label: 'Profile', onPress: () => navigation.navigate("ProfileScreen") },
        { label: 'History', onPress: () => navigation.navigate("HistoryScreen") },
    ];

    return (
        <View style={{ flex: 1, position: 'relative', padding: 20 }}>
            <FlashcardList
                flashcards={flashcards}
                deleteFlashcard={(index) => deleteFlashcard(flashcards[index].id)}
            />

            <TouchableOpacity style={styles.button} onPress={goToCategoryScreen}>
                <Text style={styles.buttonText}>Przejdź do nauki</Text>
            </TouchableOpacity>

            <BottomMenu items={menuItems}/>

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
