import React, { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity, Alert  } from 'react-native';

type MenuItem = {
    id: string;
    name: string;
    description: string;
    course: string;
    price: number;
};

const HomeScreen = ({ navigation }: any) => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

    const removeMenuItem = (id: string) => {
        setMenuItems(menuItems.filter((item) => item.id !== id));
        Alert.alert('Item Removed', 'Item is removed.');
    };

    const calculateAveragePrice = () => {
        if (menuItems.length ===0) return 0;
        const totalPrice =menuItems.reduce((sum, item) => sum + item.price, 0);
        return (totalPrice / menuItems.length).toFixed(2);
    };
}