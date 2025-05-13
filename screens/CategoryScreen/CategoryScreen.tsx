import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../types/navigation";
import {styles} from "./categoryScreenStyles.ts";

type CategoryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CategoryScreen'>;

const CategoryScreen = () => {
    const navigation = useNavigation<CategoryScreenNavigationProp>();
    const categories = ['Foreign languages', 'Mathematics', 'History', 'Biology'];




    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select flashcard category</Text>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <View style={styles.categoryItem}>

                    </View>
                )}
                keyExtractor={(item) => item}
            />
        </View>
    );
};



export default CategoryScreen;
