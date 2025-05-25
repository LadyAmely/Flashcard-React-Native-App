import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import Card from '../../atoms/Card/Card';
import Question from '../../atoms/Question/Question';
import Answer from '../../atoms/Answer/Answer';
import Button from '../../atoms/Button/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from './flashcardStyles';
import FlashcardForm from '../../organisms/FlashcardForm/FlashcardForm';
import { FlashcardModel } from '../../../models/FlashcardModel';

interface FlashcardProps {
    id: string;
    question: string;
    answer: string;
    index: number;
    onDelete: (index: number) => void;
    onEdit?: (index: number) => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ id, question, answer, index, onDelete }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [editedQuestion, setEditedQuestion] = useState(question);
    const [editedAnswer, setEditedAnswer] = useState(answer);

    const flashcardModel = new FlashcardModel();

    const handleDelete = () => {
        setIsOptionsVisible(false);
        onDelete(index);
    };

    const handleEdit = () => {
        setIsOptionsVisible(false);
        setIsEditModalVisible(true);
    };

    const closeEditModal = () => {
        setIsEditModalVisible(false);
    };

    const handleUpdate = async () => {
        try {
            await flashcardModel.updateFlashcard(id, {
                question: editedQuestion,
                answer: editedAnswer,
            });
            closeEditModal();
        } catch (err) {
            console.error('Błąd podczas aktualizacji fiszki:', err);
        }
    };

    return (
        <Card>
            <TouchableOpacity style={styles.iconButton} onPress={() => setIsOptionsVisible(true)}>
                <AntDesign name="edit" size={24} color="#333" />
            </TouchableOpacity>

            <Question question={question} />

            {showAnswer && <Answer answer={answer} />}
            <Button
                onPress={() => setShowAnswer(!showAnswer)}
                title={showAnswer ? 'Ukryj odpowiedź' : 'Wyświetl odpowiedź'}
            />

            {/* Modal opcji (edytuj / usuń) */}
            <Modal transparent={true} visible={isOptionsVisible} animationType="fade">
                <TouchableOpacity style={styles.modalOverlay} onPress={() => setIsOptionsVisible(false)}>
                    <View style={styles.modal}>
                        <TouchableOpacity onPress={handleEdit}>
                            <Text style={styles.modalOption}>Edytuj</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleDelete}>
                            <Text style={[styles.modalOption, { color: 'red' }]}>Usuń</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>

            {/* Modal edycji fiszki */}
            <Modal visible={isEditModalVisible} animationType="slide" transparent={true} onRequestClose={closeEditModal}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
                        <FlashcardForm
                            question={editedQuestion}
                            answer={editedAnswer}
                            setQuestion={setEditedQuestion}
                            setAnswer={setEditedAnswer}
                            addFlashcard={handleUpdate}
                            closeModal={closeEditModal}
                        />
                    </View>
                </View>
            </Modal>
        </Card>
    );
};

export default Flashcard;
