import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const fakeHistory = [
    { date: '2024-05-20', learned: 15 },
    { date: '2024-05-19', learned: 10 },
    { date: '2024-05-18', learned: 8 },
];

const HistoryScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dziennik nauki</Text>
            <ScrollView>
                {fakeHistory.map((entry, index) => (
                    <View key={index} style={styles.entry}>
                        <Text style={styles.date}>{entry.date}</Text>
                        <Text style={styles.detail}>Fiszki: {entry.learned}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f5f9ff' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
    entry: { backgroundColor: '#fff', padding: 15, borderRadius: 12, marginBottom: 10 },
    date: { fontSize: 16, fontWeight: '600' },
    detail: { fontSize: 14, marginTop: 5 },
});

export default HistoryScreen;
