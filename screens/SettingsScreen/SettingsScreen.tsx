import React from 'react';
import { View, Text, Switch} from 'react-native';
import {styles} from "./settingsScreenStyles.ts";
import {useSettings} from "../../hooks/useSettings.ts";


const SettingsScreen = () => {

    const { isDarkMode, toggleDarkMode, theme } = useSettings();
    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.title, { color: theme.textPrimary }]}>Settings</Text>

            <View style={[styles.row, { backgroundColor: theme.cardBackground, shadowColor: theme.shadowColor }]}>
                <Text style={[styles.label, { color: theme.textPrimary }]}>Dark Mode</Text>
                <Switch
                    value={isDarkMode}
                    onValueChange={toggleDarkMode}
                    thumbColor={isDarkMode ? theme.primary : '#ccc'}
                    trackColor={{ false: '#bbb', true: theme.primary }}
                />
            </View>
        </View>
    );
};


export default SettingsScreen;
