import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AboutModal () {
    const [modalVisible, setModalVisible] = useState(Boolean);

    return (
        <View>
            <Modal
                  visible={modalVisible}
                  transparent={true}
                  animationType="fade"
                  onRequestClose={() => setModalVisible(false)}
                >
                  <View style={styles.modalOverlay}>
                    <View style={styles.modalCard}>
                      <Text style={styles.modalText}>
                        O Arcano Pessoal é sua carta de nascimento. Análogo ao seu signo, ele também rege a sua vida e determina suas habilidades e os traços da sua personalidade.
                        {"\n\n"}
                        Para fazer o cálculo do seu Arcano Pessoal, você precisará anotar a data do seu nascimento. Com ela, você precisará somar os números do dia, do mês e do ano do nascimento.
                        {"\n\n"}
                        Após chegar a um número de 4 dígitos, é necessário somar os algarismos presentes neste resultado até chegar ao número correspondente ao seu Arcano Pessoal, de modo que o resultado deve ser necessariamente menor ou igual a 22.
                      </Text>
                      <TouchableOpacity 
                        style={styles.closeButton}
                        onPress={() => setModalVisible(false)}
                      >
                        <Text style={styles.closeButtonText}>Fechar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>  
                 <TouchableOpacity 
                            style={styles.infoButton}
                            onPress={() => setModalVisible(true)}
                          >
                            <Text style={styles.infoButtonText}>i</Text>
                          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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