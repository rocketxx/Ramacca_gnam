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
      <Modal visible={isModalVisible} animationType="slide">
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    width: '90%',
    alignSelf: 'center',
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
  closeButton: {
    position: 'absolute',
    top: 86,
    right: 16,
    zIndex: 1,
  },
});

export default CardItemMenu;
