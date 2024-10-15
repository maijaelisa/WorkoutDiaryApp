// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // AddWorkoutScreen tyylit
  container: { padding: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  workoutTypeContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 20 
  },
  workoutTypeButton: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 10, 
    borderWidth: 1, 
    borderColor: 'pink', 
    borderRadius: 5, 
    width: '30%', 
    justifyContent: 'center',
    backgroundColor: '#19bf9b', 
  },
  workoutTypeText: { 
    marginLeft: 5, 
    fontSize: 14, 
  },
  input: { 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 20, 
    paddingHorizontal: 10 
  },
  selectedDateContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 10, 
    justifyContent: 'center', 
  },
  selectedDate: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginLeft: 5, 
  },
  modalContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: { 
    width: '80%', 
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 20,
    alignItems: 'center',
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#19bf9b', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'pink',
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectDateButton: {
    backgroundColor: '#19bf9b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  selectDateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#5bace3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  // WorkoutList tyylit
  workoutListContainer: { padding: 20, flex: 1, backgroundColor: '#f8f9fa' },
  workoutListTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },

  // Yhteenvedon tyyli
  summaryContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  summaryBox: { 
    alignItems: 'center', 
    backgroundColor: '#19bf9b', 
    padding: 15, 
    borderRadius: 10, 
    width: '30%', 
  },
  summaryDistance: { 
    color: 'white', 
    fontSize: 15, 
    fontWeight: 'bold', 
    marginTop: 5, 
  },

  // Harjoitusten lista (yksittäisen harjoituksen tyyli)
  workoutItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  workoutText: { 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
  workoutDetails: { 
    fontSize: 14, 
    color: '#6c757d', 
    marginTop: 5, 
  },
});
