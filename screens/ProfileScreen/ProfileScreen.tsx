import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/navigation';
import { styles } from './profileScreenStyles';
import { launchImageLibrary, Asset } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomMenu from "../../components/atoms/BottomMenu/BottomMenu.tsx";

type NavigationProp = StackNavigationProp<RootStackParamList, 'WelcomeScreen'>;

const ProfileScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    const [name, setName] = useState('');
    const [imageUri, setImageUri] = useState<string | null>(null);

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        try {
            const savedName = await AsyncStorage.getItem('profileName');
            const savedImage = await AsyncStorage.getItem('profileImage');
            if (savedName) setName(savedName);
            if (savedImage) setImageUri(savedImage);
        } catch (e) {
            console.error('Błąd ładowania profilu:', e);
        }
    };

    const pickImage = () => {
        launchImageLibrary(
            {
                mediaType: 'photo',
                includeBase64: false,
            },
            (response) => {
                if (response.didCancel) {
                    return;
                } else if (response.errorCode) {
                    Alert.alert('Błąd przy wyborze zdjęcia', response.errorMessage || '');
                } else if (response.assets && response.assets.length > 0) {
                    const asset: Asset = response.assets[0];
                    if (asset.uri) {
                        setImageUri(asset.uri);
                    }
                }
            }
        );
    };

    const saveProfile = async () => {
        try {
            await AsyncStorage.setItem('profileName', name);
            if (imageUri) await AsyncStorage.setItem('profileImage', imageUri);
            Alert.alert('✅ Zapisano profil');
        } catch (e) {
            Alert.alert('❌ Błąd zapisu profilu');
        }
    };

    const menuItems = [
        { label: 'Home', onPress: () => navigation.navigate("HomeScreen") },
        { label: 'Profile', onPress: () => navigation.navigate("ProfileScreen") },
        { label: 'History', onPress: () => navigation.navigate("HistoryScreen") },
    ];

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={pickImage}>
                <Image
                    source={
                        imageUri
                            ? { uri: imageUri }
                            : { uri: 'https://i.pravatar.cc/150?img=12' }
                    }
                    style={styles.avatar}
                />
                <Text style={{ fontSize: 12, textAlign: 'center', marginTop: 6, color: '#888' }}>
                    Kliknij, aby zmienić zdjęcie
                </Text>
            </TouchableOpacity>

            <TextInput
                placeholder="Wpisz swoje imię"
                value={name}
                onChangeText={setName}
                style={styles.input}
                placeholderTextColor="#aaa"
            />

            <Text style={styles.progress}>Opanowanych fiszek: 120</Text>

            <TouchableOpacity style={styles.button} onPress={saveProfile}>
                <Text style={styles.buttonText}>Zapisz profil</Text>
            </TouchableOpacity>
            <BottomMenu items={menuItems}/>
        </View>
    );
};

export default ProfileScreen;
