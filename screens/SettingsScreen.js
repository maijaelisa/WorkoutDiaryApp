import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { WorkoutContext } from '../context/WorkoutContext';
import { StyleSheet } from 'react-native';

export default function SettingsScreen() {
    const { unit, setUnit } = useContext(WorkoutContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Text>Select Units:</Text>
            <RadioButton.Group onValueChange={(value) => setUnit(value)} value={unit}>
                <RadioButton.Item label="Kilometers" value="km" />
                <RadioButton.Item label="Miles" value="miles" />
            </RadioButton.Group>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20 },
    title: { fontSize: 20, marginBottom: 10 },
});
