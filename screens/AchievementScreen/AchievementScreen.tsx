import React from 'react';
import {ScrollView, Text} from "react-native";
import Card from '../../components/atoms/Card/Card.tsx';
import {ProgressBar} from "../../components/atoms/ProgressBar/ProgressBar.tsx";
import {useAchievement} from "../../hooks/useAchievement.ts";
import {styles} from "./achievementScreenStyles.ts";

const AchievementScreen = () => {
    const achievements = useAchievement();

    return (
        <ScrollView style={styles.container}>
            {achievements?.map((ach) => {
                const progress = ach.current / ach.target;
                return (
                    <Card key={ach.id}>
                        <Text style={styles.title}>{ach.title}</Text>
                        <Text style={styles.description}>{ach.description}</Text>
                        <ProgressBar progress={progress} />
                        <Text style={styles.progressText}>
                            {ach.unlocked ? 'Unlocked' : `${Math.round(progress * 100)}%`}
                        </Text>
                    </Card>
                );
            })}
        </ScrollView>
    );
};

export default AchievementScreen;