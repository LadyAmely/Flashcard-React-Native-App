import React from 'react';
import { View, Text, FlatList} from 'react-native';
import { styles } from './rewardScreenStyles';
import {RewardCard} from "../../components/molecules/RewardCard/RewardCard.tsx";
import {Reward} from "../../types/reward.ts";
import {useReward} from "../../hooks/useRewards.ts";


const RewardScreen = () => {
    const { rewards, handleClaim} = useReward();

    const renderItem = ({ item }: { item: Reward }) => (
        <RewardCard item={item} handleClaim={handleClaim} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your rewards</Text>
            <FlatList
                data={rewards}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

export default RewardScreen;
