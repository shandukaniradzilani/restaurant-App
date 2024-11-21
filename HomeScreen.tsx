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

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Christoffel's Menu</Text>
            <Text>Total Item: {menuItems.length}</Text>
            <Text>Average Price: R{calculateAveragePrice()}</Text>

            <FlatList
            data={menuItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item}) => (
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemTitle}>{item.name}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.course} - R{item.price}</Text>
                    
                    <TouchableOpacity
                    style={styles.removeButton}
                    onPress={() => removeMenuItem}>Remove</TouchableOpacity>
                    </View>
            )}
            />

            <Button
            title="Add Menu"
            onPress={() => navigation.navigate('AddMenuItem', { setMenuItems, menuItems})}
            />
            <Button
            title="Filter Menu" 
            onPress={() => navigation.navigate ('FilterMenu', { menuItems})}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#f0f8ff' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    menuItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
    menuItemTitle: { fontSize: 18, fontWeight: 'bold' },
    removeButton: {
      marginTop: 10,
      padding: 10,
      backgroundColor: 'red',
      borderRadius: 5,
    },
    removeButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  
  export default HomeScreen;
  