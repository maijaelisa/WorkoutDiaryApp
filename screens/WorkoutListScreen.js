import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { WorkoutContext } from '../context/WorkoutContext';
import { styles } from '../Styles/Styles';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

export default function WorkoutListScreen() {
    const { workouts, unit } = useContext(WorkoutContext);

    const totalDistances = workouts.reduce((totals, workout) => {
        totals[workout.type] = (totals[workout.type] || 0) + workout.distance;
        return totals;
    }, {});

    const convertDistance = (distance) => {
        const converted = unit === 'km' ? distance : distance / 1.60934;
        return converted.toFixed(2);
      };

    return (
        <View style={styles.workoutListContainer}>
            <Text style={styles.workoutListTitle}>Workout History</Text>

            <View style={styles.summaryContainer}>
                {/* Running Box */}
                <View style={styles.summaryBox}>
                    <FontAwesome5 name="running" size={40} color="white" />
                    <Text style={styles.summaryDistance}>{convertDistance(totalDistances['Running'] || 0)} {unit}</Text>
                </View>

                {/* Cycling Box */}
                <View style={styles.summaryBox}>
                    <FontAwesome name="bicycle" size={40} color="white" />
                    <Text style={styles.summaryDistance}>{convertDistance(totalDistances['Cycling'] || 0)} {unit}</Text>
                </View>

                {/* Swimming Box */}
                <View style={styles.summaryBox}>
                    <FontAwesome5 name="swimmer" size={40} color="white" />
                    <Text style={styles.summaryDistance}>{convertDistance(totalDistances['Swimming'] || 0)} {unit}</Text>
                </View>
            </View>

            <ScrollView>
                {workouts.map((workout) => (
                    <View key={workout.id} style={styles.workoutItem}>
                        <Text style={styles.workoutText}>{workout.type}</Text>
                        <Text style={styles.workoutDetails}>
                            {convertDistance(workout.distance)} {unit} - {workout.duration} mins - {workout.date.toDateString()}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
