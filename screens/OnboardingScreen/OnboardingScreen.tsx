import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    Text,
    Dimensions,
    FlatList,
    Image,
    NativeScrollEvent,
    NativeSyntheticEvent,
} from 'react-native';
import ActionButton from '../../components/atoms/ActionButton/ActionButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';
import { styles } from './onboardingScreenStyles';
import { SLIDES } from './onboardingSlides';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';

type NavigationProp = StackNavigationProp<RootStackParamList, 'WelcomeScreen'>;
const { width } = Dimensions.get('window');

const OnboardingScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scale = useSharedValue(1);

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(slideIndex);
        scale.value = 0.9;
        scale.value = withSpring(1, { damping: 10 });
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    const renderItem = ({ item }: { item: typeof SLIDES[0] }) => (
        <View style={[styles.slide, { width }]}>
            <Image source={item.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={SLIDES}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                onScroll={onScroll}
                scrollEventThrottle={16}
            />
            <Animated.View style={animatedStyle}>
                <ActionButton
                    label={currentIndex === SLIDES.length - 1 ? 'Zaczynamy!' : 'Dalej'}
                    onPress={() => {
                        if (currentIndex < SLIDES.length - 1) {
                            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
                        } else {
                            navigation.navigate('HomeScreen');
                        }
                    }}
                />
            </Animated.View>
        </View>
    );
};

export default OnboardingScreen;
