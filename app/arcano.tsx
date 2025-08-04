import { router, useLocalSearchParams } from 'expo-router'; // Use expo-router's navigation hooks
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import arcanoData from './data/arcanoData';

export default function ArcanoScreen() {
  const params = useLocalSearchParams();
  const arcanoNumber = params.arcanoNumber ? Number(params.arcanoNumber) : 0;
  const arcano = arcanoData[arcanoNumber - 1] || arcanoData[0];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Seu resultado é:</Text>
        <Text style={styles.arcanoName}>
          Seu Arcano é: {arcanoNumber} - {arcano.nome}
        </Text>
        
        <Image 
          source={{ uri: arcano.fotoUrl }} 
          style={styles.image} 
          resizeMode="contain"
        />
        
        <ScrollView style={styles.scrollView}>
          <Text style={styles.description}>{arcano.texto}</Text>
        </ScrollView>
        
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 20,
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 8,
    padding: 20,
    width: '90%',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  arcanoName: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 150,
    height: 250,
    marginBottom: 20,
  },
  description: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  scrollView: {
    maxHeight: 200,
    marginBottom: 15,
  },
  backButton: {
    backgroundColor: '#ECE340',
    padding: 10,
    borderRadius: 20,
    minWidth: 100,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});