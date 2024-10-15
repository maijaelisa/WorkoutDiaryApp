import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddWorkoutScreen from './screens/AddWorkoutScreen';
import WorkoutListScreen from './screens/WorkoutListScreen';
import SettingsScreen from './screens/SettingsScreen';
import { WorkoutProvider } from './context/WorkoutContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <WorkoutProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AddWorkout">
          <Stack.Screen name="AddWorkout" component={AddWorkoutScreen} options={{ title: 'Workout Diary' }} />
          <Stack.Screen name="WorkoutList" component={WorkoutListScreen} options={{ title: 'Workout History' }} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </WorkoutProvider>
  );
}
