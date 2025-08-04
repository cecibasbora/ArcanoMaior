import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import useArcanoCalculator from '../hooks/useArcanoCalculator';
import AboutModal from './AboutModal';

interface HomeFormProps {
  onCalculate: (arcanoNumber: number) => void;
}

export default function ArcanoForm({ onCalculate }: HomeFormProps) {
  const {
    day,
    setDay,
    month,
    setMonth,
    year,
    setYear,
    error,
    calculateArcano
  } = useArcanoCalculator();

  const handleCalculate = () => {
    const result = calculateArcano();
    if (result !== null) {
      onCalculate(result);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <AboutModal />
        <Text style={styles.title}>Descubra o seu arcano maior:</Text>
        
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <Text style={styles.label}>Dia:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={day}
          onChangeText={setDay}
          placeholder="DD"
          placeholderTextColor="#999"
        />
        
        <Text style={styles.label}>Mês:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={month}
          onChangeText={setMonth}
          placeholder="MM"
          placeholderTextColor="#999"
        />
        
        <Text style={styles.label}>Ano:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={year}
          onChangeText={setYear}
          placeholder="AAAA"
          placeholderTextColor="#999"
        />
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 8,
    padding: 20,
    width: '80%',
  },
  title: {
    color: 'white',
    fontSize: 19,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Cochin',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Cochin',
  },
  label: {
    color: 'white',
    marginBottom: 5,
    fontFamily: 'Cochin',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  calculateButton: {
    backgroundColor: '#ECE340',
    padding: 10,
    borderRadius: 20,
    minWidth: 100,
    alignItems: 'center',
  },
  allArcanosButton: {
    backgroundColor: '#4A4A4A',
    padding: 10,
    borderRadius: 20,
    minWidth: 100,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  infoButton: {
    backgroundColor: '#d2d2d2',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  infoButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalCard: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    borderRadius: 8,
    width: '90%',
  },
  modalText: {
    color: 'white',
    marginBottom: 20,
    fontFamily: 'Cochin',
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#ECE340',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});