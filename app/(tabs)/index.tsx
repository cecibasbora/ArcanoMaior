import { router } from 'expo-router';
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import ArcanoForm from '../../components/ArcanoForm';

const backgroundImage = { uri: 'https://t3.ftcdn.net/jpg/04/04/07/82/360_F_404078200_OUC5gt2Fx2LRLVjVKRI48WCSCiUXVTKj.jpg'}

export default function HomeScreen() {
  const handleCalculate = (arcanoNumber: number) => {
    router.push({
      pathname: '/arcano',
      params: { arcanoNumber }
    });
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <ArcanoForm 
          onCalculate={handleCalculate} 
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
});