import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {styles} from "./bottomMenu";


interface MenuItem {
    label: string;
    onPress: () => void;
}

interface BottomMenuProps {
    items: MenuItem[];
}

const BottomMenu: React.FC<BottomMenuProps> = ({ items }) => {
    return (
        <View style={styles.container}>
            {items.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={item.onPress}
                    style={styles.menuItem}
                >
                    <Text style={styles.label}>{item.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default BottomMenu;