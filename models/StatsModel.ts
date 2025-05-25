import {collection, addDoc, getDocs, query, deleteDoc, doc} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export interface DailyStat {
    date: string;
    correct: number;
    total: number;
}

export class StatsModel {
    async fetchStats(): Promise<DailyStat[]> {
        const q = query(collection(db, 'userStats'));
        const querySnapshot = await getDocs(q);

        return querySnapshot.docs.map((doc) => ({
            date: doc.data().date,
            correct: doc.data().correct,
            total: doc.data().total,
        }));
    }

    async addStat(date: string, correct: number, total: number): Promise<void> {
        await addDoc(collection(db, 'userStats'), { date, correct, total });
    }

    async addSingleStat(isCorrect: boolean): Promise<void> {
        const date = new Date().toISOString().split('T')[0];
        await addDoc(collection(db, 'userStats'), {
            date,
            correct: isCorrect ? 1 : 0,
            total: 1,
        });
    }

    async clearStats(): Promise<void> {
        const snapshot = await getDocs(collection(db, 'userStats'));
        const deletions = snapshot.docs.map((docSnap) => deleteDoc(doc(db, 'userStats', docSnap.id)));
        await Promise.all(deletions);
    }

}
