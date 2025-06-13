import React from 'react';
import { FlatList, View} from 'react-native';
import { styles } from './notificationScreenStyles';
import {NotificationCard} from "../../components/molecules/Notification/Notification.tsx";
import {useNotifications} from "../../hooks/useNotifications.ts";

const NotificationScreen = () => {

    const mockNotifications = useNotifications();

    return (
        <View style={styles.container}>
            <FlatList
                data={mockNotifications}
                keyExtractor={(item) => item.id}
                renderItem={NotificationCard}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

export default NotificationScreen;
