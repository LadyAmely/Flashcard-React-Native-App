import React from 'react';
import {View, Text} from 'react-native';
import { styles } from './dailyTipScreenStyles';
import {useDailyTip} from "../../hooks/useDailyTip.ts";
import Button from "../../components/atoms/Button/Button.tsx";
import TextBlock from "../../components/atoms/TextBlock/TextBlock.tsx";

export const DailyTipScreen = () => {
    const {todayTip, handleRefresh} = useDailyTip();
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Today's tip</Text>
            <TextBlock>
                {todayTip}
            </TextBlock>
            <Button onPress={handleRefresh} title="New random tip"/>
        </View>
    );
};

export default DailyTipScreen;
