import { collection, addDoc, getDocs, query, doc, deleteDoc, updateDoc } from 'firebase/firestore';

import { db } from '../firebase/firebaseConfig';

export interface Flashcard {
    question: string;
    answer: string;
}

export class FlashcardModel {
    async fetchFlashcards(): Promise<Flashcard[]> {
        const q = query(collection(db, 'flashcards'));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map((doc) => ({
            question: doc.data().question,
            answer: doc.data().answer,
        }));
    }

    async fetchFlashcardsWithId(): Promise<(Flashcard & { id: string })[]> {
        const q = query(collection(db, 'flashcards'));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            question: doc.data().question,
            answer: doc.data().answer,
        }));
    }

    async addFlashcard(question: string, answer: string): Promise<void> {
        await addDoc(collection(db, 'flashcards'), { question, answer });
    }

    async deleteFlashcard(id: string): Promise<void> {
        await deleteDoc(doc(db, 'flashcards', id));
    }

    async updateFlashcard(id: string, updatedData: { question: string; answer: string }): Promise<void> {
        const ref = doc(db, 'flashcards', id);
        await updateDoc(ref, updatedData);
    }
}
