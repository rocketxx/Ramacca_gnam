import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Modal, Dimensions, Alert } from 'react-native';
import { Colors } from '../../constants/styles';
import Finestra from './Finestra';
import { useNavigation } from '@react-navigation/core';
import { Ionicons } from '@expo/vector-icons';
import ListItemCondimenti from './ListItemCondimenti';

const CardItemMenu = ({ id, title, subTitle, disponibile, myroute }) => {
  const containerStyle = disponibile ? styles.container : styles.containerClosed;
  const textStyle = disponibile ? styles.title : [styles.title, styles.titleClosed];
  const subtitleStyle = disponibile ? styles.subtitle : [styles.subtitle, styles.subtitleClosed];
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalWidth, setModalWidth] = useState(0);

  useEffect(() => {
    const screenWidth = Dimensions.get('window').width;
    const modalWidth = Math.floor(screenWidth * 0.9);
    setModalWidth(modalWidth);
  }, []);

  const handlePress = () => {
    console.log(id);
    navigation.navigate(myroute);
  };

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    Alert.alert(
      'Conferma',
      'Sei sicuro di voler chiudere? Perderai i dati inseriti.',
      [
        { text: 'Annulla', style: 'cancel' },
        { text: 'Chiudi', style: 'destructive', onPress: () => setModalVisible(false) },
      ]
    );
  };

  return (
    <>
      <TouchableOpacity style={containerStyle} onPress={handleOpenModal} disabled={!disponibile}>
        <View style={styles.content}>
          <Text style={textStyle}>{title}</Text>
          <Text style={subtitleStyle}>{subTitle}</Text>
        </View>
      </TouchableOpacity>
      <Modal visible={isModalVisible} animationType= "slide">
        <View style={[styles.modalContainer, { width: modalWidth }]}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
          <ListItemCondimenti info={id} />
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
    textTransform: 'uppercase',
  },
  titleClosed: {
    color: '#fff',
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    fontStyle: 'italic',
  },
  subtitleClosed: {
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 66, // Aggiungi padding top per lasciare spazio al tasto di chiusura
  },
  modalCloseButton: {
    position: 'absolute',
    top: -16, // Sposta il tasto di chiusura verso l'alto di 16 punti
    right: -16,
    zIndex: 1,
  },
  hiddenArea: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 2, // Assicurati che l'area nascosta sia sopra gli elementi
    backgroundColor: 'white', 
  },
});

export default CardItemMenu;
