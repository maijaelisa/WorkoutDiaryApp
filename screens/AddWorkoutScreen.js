import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Alert, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Modal } from 'react-native';
import { WorkoutContext } from '../context/WorkoutContext';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from '../Styles/Styles';

export default function AddWorkoutScreen({ navigation }) {
    const { workouts, setWorkouts, unit } = useContext(WorkoutContext);
    const [type, setType] = useState('Running');
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setDistance('');
            setDuration('');
        });

        return unsubscribe;
    }, [navigation]);

    React.useLayoutEffect(() => {
        // Navigointipainikkeet asetuksiin ja listaan
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <FontAwesome name="cog" size={24} color="black" style={{ marginRight: 15 }} />
                </TouchableOpacity>
            ),
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('WorkoutList')}>
                    <FontAwesome name="list" size={24} color="black" style={{ marginLeft: 15 }} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const addWorkout = () => {
        const distanceValue = parseFloat(distance);
        const durationValue = parseFloat(duration);

        if (isNaN(distanceValue) || distanceValue <= 0 || isNaN(durationValue) || durationValue <= 0) {
            Alert.alert('Invalid input', 'Distance and duration must be positive numbers.');
            return;
        }

        const newWorkout = {
            id: workouts.length + 1,
            type,
            distance: unit === 'km' ? distanceValue : distanceValue * 1.60934,
            duration: durationValue,
            date,
        };

        setWorkouts([...workouts, newWorkout]);
        Alert.alert('Workout added!', 'Your workout has been successfully added.');

        navigation.navigate('WorkoutList');
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>Add New Workout</Text>

                {/* Harjoitustyypin valinta */}
                <View style={styles.workoutTypeContainer}>
                    <TouchableOpacity onPress={() => setType('Running')} style={styles.workoutTypeButton}>
                        <FontAwesome5 name="running" size={16} color={type === 'Running' ? 'white' : 'black'} />
                        <Text style={[styles.workoutTypeText, { color: type === 'Running' ? 'white' : 'black', fontSize: 14 }]}>Running</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setType('Cycling')} style={styles.workoutTypeButton}>
                        <FontAwesome name="bicycle" size={16} color={type === 'Cycling' ? 'white' : 'black'} />
                        <Text style={[styles.workoutTypeText, { color: type === 'Cycling' ? 'white' : 'black', fontSize: 14 }]}>Cycling</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setType('Swimming')} style={styles.workoutTypeButton}>
                        <FontAwesome5 name="swimmer" size={16} color={type === 'Swimming' ? 'white' : 'black'} />
                        <Text style={[styles.workoutTypeText, { color: type === 'Swimming' ? 'white' : 'black', fontSize: 14 }]}>Swimming</Text>
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder={unit === 'km' ? 'Distance (km)' : 'Distance (miles)'}
                    keyboardType="numeric"
                    value={distance}
                    onChangeText={setDistance}
                    onBlur={() => Keyboard.dismiss()}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Duration (minutes)"
                    keyboardType="numeric"
                    value={duration}
                    onChangeText={setDuration}
                    onBlur={() => Keyboard.dismiss()}
                />

                {/* Select Date painike */}
                <TouchableOpacity style={styles.selectDateButton} onPress={() => setShowDatePicker(true)}>
                    <Text style={styles.selectDateButtonText}>Select Date</Text>
                </TouchableOpacity>

                {/* Näytä valittu päivämäärä */}
                <View style={styles.selectedDateContainer}>
                    <AntDesign name="calendar" size={24} color="black" />
                    <Text style={styles.selectedDate}>
                        {date.toLocaleDateString()}
                    </Text>
                </View>


                <TouchableOpacity style={styles.addButton} onPress={addWorkout}>
                    <Text style={styles.addButtonText}>Add Workout</Text>
                </TouchableOpacity>

                {/* Modal päivämäärävalinnalle */}
                {showDatePicker && (
                    <Modal transparent={true} animationType="slide" visible={showDatePicker}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <DateTimePicker
                                    value={date}
                                    mode="date"
                                    display="default"
                                    onChange={(event, selectedDate) => {
                                        setShowDatePicker(false);
                                        if (selectedDate) {
                                            setDate(selectedDate);
                                        }
                                    }}
                                />
                                {/* Close-painike */}
                                <TouchableOpacity style={styles.closeButton} onPress={() => setShowDatePicker(false)}>
                                    <Text style={styles.closeButtonText}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
}
