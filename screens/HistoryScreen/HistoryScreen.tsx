import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './historyScreenStyles';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/navigation";
import BottomMenu from "../../components/atoms/BottomMenu/BottomMenu.tsx";

type HistoryEntry = {
    date: string;
    learned: number;
    userId?: string;
};

type HistoryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HistoryScreen'>;

const HistoryScreen = () => {
    const navigation = useNavigation<HistoryScreenNavigationProp>();
    const [history, setHistory] = useState<HistoryEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const userId = 'demoUser';

    const menuItems = [
        { label: 'Home', onPress: () => navigation.navigate("HomeScreen") },
        { label: 'Profile', onPress: () => navigation.navigate("ProfileScreen") },
        { label: 'History', onPress: () => navigation.navigate("HistoryScreen") },
    ];

    useEffect(() => {
        const loadHistory = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'learningHistory'));

                const allEntries: HistoryEntry[] = snapshot.docs
                    .map(doc => doc.data() as HistoryEntry)
                    .filter(entry => entry.userId === userId)
                    .sort((a, b) => b.date.localeCompare(a.date));

                setHistory(allEntries);
            } catch (e) {
                console.error('Błąd ładowania historii z Firestore:', e);
            } finally {
                setIsLoading(false);
            }
        };

        loadHistory();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dziennik nauki</Text>

            {isLoading ? (
                <Text style={styles.detail}>Ładowanie...</Text>
            ) : history.length === 0 ? (
                <Text style={styles.detail}>Brak historii nauki</Text>
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    {history.map((entry, index) => (
                        <View key={index} style={styles.entry}>
                            <Text style={styles.date}>{entry.date}</Text>
                            <Text style={styles.detail}>Fiszki nauczone: {entry.learned}</Text>
                        </View>
                    ))}
                </ScrollView>
            )}

            <BottomMenu items={menuItems}/>
        </View>
    );
};

export default HistoryScreen;
