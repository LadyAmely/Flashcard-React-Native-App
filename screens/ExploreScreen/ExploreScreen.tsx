import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const sampleSets = [
    { id: '1', title: 'Angielski - Podstawy', animation: require('../../assets/animations/english.json') },
    { id: '2', title: 'Geografia - Stolice', animation: require('../../assets/animations/globe.json') },
    { id: '3', title: 'Matematyka - Wzory', animation: require('../../assets/animations/math.json') },
];

const ExploreScreen = () => {
    const handleImport = (title: string) => {
        alert(`Dodano zestaw: ${title}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Eksploruj zestawy</Text>
            <FlatList
                data={sampleSets}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <LottieView source={item.animation} autoPlay loop style={styles.lottie} />
                        <Text style={styles.title}>{item.title}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => handleImport(item.title)}>
                            <Text style={styles.buttonText}>Dodaj</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    card: { backgroundColor: '#fff', padding: 20, borderRadius: 16, marginBottom: 20, alignItems: 'center' },
    title: { fontSize: 18, fontWeight: '600', marginVertical: 10 },
    lottie: { height: 100 },
    button: { backgroundColor: '#365EFF', padding: 10, borderRadius: 10 },
    buttonText: { color: 'white', fontWeight: 'bold' },
});

export default ExploreScreen;
function alert(arg0: string) {
    throw new Error('Function not implemented.');
}

