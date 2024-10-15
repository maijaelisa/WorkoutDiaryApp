import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { WorkoutContext } from '../context/WorkoutContext';
import { styles } from '../Styles/Styles';

export default function SettingsScreen() {
    const { unit, setUnit } = useContext(WorkoutContext);

    return (
        <View style={styles.settingsContainer}>
            <Text style={styles.settingsTitle}>Settings</Text>
            <Text>Select Units:</Text>
            <RadioButton.Group onValueChange={(value) => setUnit(value)} value={unit}>
                <RadioButton.Item label="Kilometers" value="km" />
                <RadioButton.Item label="Miles" value="miles" />
            </RadioButton.Group>
        </View>
    );
}
