import React, { useState } from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";

const FilterMenuScreen = ({ route, navigation }: any) => {
    const { menuItems } = route.params;
    const [filterItems, setFilteredItems ] = useState(menuItems);
    const filterByCourse = (course: string) => {
        setFilteredItems(menuItems.filter((item: { course: string}) => item.course === course));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Course</Text>
            <Button title="Starter" onPress={() => filterByCourse('Starter')} />
            <Button title="Mains" onPress={() => filterByCourse('Main')} />
            <Button title="desserts" onPress={() => filterByCourse('Desserts')} />
            
            <FlatList 
            data={filterItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View style={ styles.menuItem}>
                    <Text>{item.name} - R{item.price}</Text>
                </View>
            )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {flex: 1, padding: 20, backgroundColor: '#f0f8ff'},
    title: { fontSize: 24, fontWeight: 'bold',marginBottom:10 },
    menuItem: {padding: 10, borderBottomWidth: 1, borderBottomColor:'#ccc'},
});

export default FilterMenuScreen;