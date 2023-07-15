import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Modal } from 'react-native';
import { Colors } from '../../constants/styles';
import Finestra from './Finestra';
import { useNavigation } from '@react-navigation/core';

const CardItemMenu = ({ id, title, subTitle, disponibile,myroute}) => {
  const containerStyle = disponibile ? styles.container : styles.containerClosed;
  const textStyle = disponibile ? styles.title : [styles.title, styles.titleClosed];
  const subtitleStyle = disponibile ? styles.subtitle : [styles.subtitle, styles.subtitleClosed];
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
      console.log(id)
      navigation.navigate(myroute)
  };
  const handleOpenModal = () => {
    setModalVisible(true);
      // openModal();
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
    <TouchableOpacity style={containerStyle} onPress={handleOpenModal} disabled={!disponibile}>
      <View style={styles.content}>
        <Text style={textStyle}>{title}</Text>
        <Text style={subtitleStyle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
          <Modal visible={isModalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Questa è la PiattoCustomScreen a scomparsa!</Text>
            <Text style={styles.modalText}>{id}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
              <Text style={styles.modalButtonText}>Chiudi PiattoCustomScreen</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
  },
  containerClosed: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
  },
  content: {
    padding: 16,
    paddingRight: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
    textTransform: 'uppercase', // Stile di testo in maiuscolo
  },
  titleClosed: {
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    fontStyle: 'italic', // Stile di testo in corsivo
  },
  subtitleClosed: {
    color: '#fff',
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

export default CardItemMenu;
