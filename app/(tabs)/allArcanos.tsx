import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import arcanoData from '../data/arcanoData';
import { RootStackParamList } from '../types';

type AllArcanosScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AllArcanos'>;

interface Props {
  navigation: AllArcanosScreenNavigationProp;
}

export default function AllArcanosScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Os Arcanos Maiores</Text>
      
      {arcanoData.map((arcano, index) => (
        <View key={index} style={styles.cardContainer}>
          <Text style={styles.cardNumber}>Arcano {index + 1}</Text>
          <Text style={styles.cardTitle}>{arcano.nome}</Text>
          
          <Image 
            source={{ uri: arcano.fotoUrl }} 
            style={styles.cardImage} 
            resizeMode="contain"
          />
          
          <Text style={styles.cardText}>{arcano.texto}</Text>
          
          <View style={styles.divider} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 15,
  },
  header: {
    color: '#ECE340',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
  },
  cardContainer: {
    backgroundColor: 'rgba(40, 40, 40, 0.8)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  cardNumber: {
    color: '#ECE340',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardImage: {
    width: '100%',
    height: 300,
    marginBottom: 15,
    borderRadius: 5,
  },
  cardText: {
    color: 'white',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Cochin',
  },
  divider: {
    height: 1,
    backgroundColor: '#ECE340',
    marginVertical: 15,
    opacity: 0.3,
  },
  backButton: {
    backgroundColor: '#ECE340',
    padding: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 50,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});