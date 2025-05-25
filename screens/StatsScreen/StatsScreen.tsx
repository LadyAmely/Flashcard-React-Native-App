import React, { useEffect, useState } from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {BarChart, LineChart} from 'react-native-chart-kit';
import { styles } from './statsScreenStyles';
import { StatsModel, DailyStat } from '../../models/StatsModel';
import { FlashcardModel } from '../../models/FlashcardModel';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {COLORS} from "../../styles/colors/variables.ts";
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/navigation";

type NavigationProp = StackNavigationProp<RootStackParamList, 'StatsScreen'>;

const StatsScreen = () => {
    const [stats, setStats] = useState<DailyStat[]>([]);
    const [knownFlashcards, setKnownFlashcards] = useState<string[]>([]);
    const [totalFlashcardsCount, setTotalFlashcardsCount] = useState<number>(0);
    const navigation = useNavigation<NavigationProp>();
    const statsModel = new StatsModel();
    const flashcardModel = new FlashcardModel();

    useEffect(() => {
        const loadData = async () => {
            try {
                const firebaseStats = await statsModel.fetchStats();
                setStats(firebaseStats);

                const knownJson = await AsyncStorage.getItem('knownFlashcards');
                if (knownJson) {
                    setKnownFlashcards(JSON.parse(knownJson));
                }

                const allFlashcards = await flashcardModel.fetchFlashcards();
                setTotalFlashcardsCount(allFlashcards.length);
            } catch (error) {
                console.error('Błąd podczas wczytywania statystyk:', error);
            }
        };

        loadData();
    }, []);

    const labels = stats.map(s => s.date.slice(5));
    const data = stats.map(s => s.correct);

    const totalAnswers = stats.reduce((acc, s) => acc + s.total, 0);
    const correctAnswers = stats.reduce((acc, s) => acc + s.correct, 0);
    const wrongAnswers = totalAnswers - correctAnswers;

    const knownCount = correctAnswers;
    const remaining = wrongAnswers;

    const handleResetAndBack = async () => {
        try {
            await statsModel.clearStats();
            await AsyncStorage.removeItem('knownFlashcards'); // reset lokalnych danych
            navigation.navigate('HomeScreen');
        } catch (error) {
            console.error('Błąd podczas resetowania statystyk:', error);
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Twoje statystyki</Text>

            <Text style={styles.text}>Znam: {correctAnswers}</Text>
            <Text style={styles.text}>Nie znam: {wrongAnswers}</Text>
            <Text style={styles.text}>Fiszki opanowane: {knownCount}</Text>
            <Text style={styles.text}>Do nauki: {remaining > 0 ? remaining : 0}</Text>

            <BarChart
                data={{
                    labels: ['Znam', 'Nie znam', 'Opanowane', 'Do nauki'],
                    datasets: [
                        {
                            data: [correctAnswers, wrongAnswers, knownCount, remaining > 0 ? remaining : 0],
                        },
                    ],
                }}
                width={Dimensions.get('window').width - 40}
                height={250}
                yAxisLabel=""
                chartConfig={{
                    backgroundColor: '#f5f9ff',
                    backgroundGradientFrom: '#f5f9ff',
                    backgroundGradientTo: '#dceeff',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(54, 94, 222, ${opacity})`,
                    labelColor: () => COLORS.textPrimary,
                    barPercentage: 0.6,
                }}
                style={{
                    marginTop: 40,
                    borderRadius: 16,
                }}
                verticalLabelRotation={0}
             yAxisSuffix=""/>

            <TouchableOpacity style={styles.resetButton} onPress={handleResetAndBack}>
                <Text style={styles.resetButtonText}>Wróć</Text>
            </TouchableOpacity>


        </View>
    );
};

export default StatsScreen;
