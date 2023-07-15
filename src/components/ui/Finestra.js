import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';

function PiattoCustomScreen ({ item }) {
  const [isModalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  useEffect(() => {
    handleOpenModal();
  }, []);

  const handleOpenModal = () => {
    setModalVisible(true);
      // openModal();
      navigation.goBack();
  };



  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
        <Text style={styles.buttonText}>Apri PiattoCustomScreen</Text>
      </TouchableOpacity> */}

      <Modal visible={isModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Questa è la PiattoCustomScreen a scomparsa!</Text>
          <Text style={styles.modalText}>{item}</Text>
          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Text style={styles.modalButtonText}>Chiudi PiattoCustomScreen</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
  },
  modalButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PiattoCustomScreen;
