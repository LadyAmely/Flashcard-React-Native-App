import { collection, addDoc, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export interface Flashcard {
    question: string;
    answer: string;
}

export class FlashcardModel {
    async fetchFlashcards(): Promise<Flashcard[]> {
        try {
            const q = query(collection(db, 'flashcards'));
            const querySnapshot = await getDocs(q);
            const flashcards: Flashcard[] = [];
            querySnapshot.forEach((doc) => {
                flashcards.push({ question: doc.data().question, answer: doc.data().answer });
            });
            return flashcards;
        } catch (error) {
            throw new Error('Błąd przy pobieraniu danych');
        }
    }

    async addFlashcard(question: string, answer: string): Promise<void> {
        try {
            await addDoc(collection(db, 'flashcards'), { question, answer });
        } catch (error) {
            throw new Error('Błąd przy dodawaniu');
        }
    }
}
