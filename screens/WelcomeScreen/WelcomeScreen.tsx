import React from 'react';
import {View} from 'react-native';
import GradientBackground from '../../components/atoms/GradientBackground/GradientBackground.tsx';
import Title from '../../components/atoms/Title/Title.tsx';
import TextBlock from '../../components/atoms/TextBlock/TextBlock.tsx';
import ActionButton from '../../components/atoms/ActionButton/ActionButton.tsx';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import {styles} from "./welcomeScreenStyles.ts";

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'WelcomeScreen'>;

const WelcomeScreen: React.FC = () => {
    const navigation = useNavigation<WelcomeScreenNavigationProp>();

    const handleStartClick = () => {
        navigation.navigate('OnboardingScreen');
    };

    return (
        <GradientBackground>
            <View style={styles.innerContainer}>
                <Title />
                <TextBlock>
                    Witaj w FlashLearn! Zaczynaj naukę i ucz się nowych rzeczy codziennie!
                </TextBlock>
                <ActionButton onPress={handleStartClick} label="Zacznij naukę" />
            </View>
        </GradientBackground>
    );
};

export default WelcomeScreen;
