import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; 
import 'react-native-get-random-values';
import { Alert, View, Text, TextInput, Button, StyleSheet } from "react-native";

const AddMenuItemScreen = ({ route, navigation }: any) => {
    const { setMenuItems, menuItems } = route.params;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [course, setCourse] = useState('');
    const [price, setPrice] = useState('');

    const AddMenuItem = () => {
        if (!name || !description || !course || isNaN (parseFloat(price))){
            Alert.alert('Oops', 'Please fill all fields');
            return;
        }

        const newItem = {
            id: uuidv4(),
            name,
            description,
            course, 
            price: parseFloat(price),
        };

        setMenuItems([...menuItems, newItem]);
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Dish Name</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter dish name"/>

            <Text style={styles.label}>Description</Text>
            <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Enter description"/>

            <Text style={styles.label}>Course</Text>
            <TextInput style={styles.input} value={course} onChangeText={setCourse} placeholder="Enter type of course"/>

            <Text style={styles.label}>Price</Text>
            <TextInput 
            style={styles.input} 
            value={price} 
            onChangeText={setPrice} 
            placeholder="Enter price" 
            keyboardType="numeric"/>

        <Button title="Add Item" onPress={AddMenuItem}/>
        </View>
    );
};
 
const styles= StyleSheet.create(
    {
        container: { flex:1, padding: 20, backgroundColor: '#f0f8ff' },
        label: { fontSize: 16, marginBottom: 5, color:'#333'},
        input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderBlockStartColor: '#fff'},
    
    });
   
export default AddMenuItemScreen

