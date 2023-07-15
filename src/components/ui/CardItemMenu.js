import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/styles';
import Finestra from './Finestra';
import { useNavigation } from '@react-navigation/core';

const CardItemMenu = ({ id, title, subTitle, disponibile,myroute}) => {
  const containerStyle = disponibile ? styles.container : styles.containerClosed;
  const textStyle = disponibile ? styles.title : [styles.title, styles.titleClosed];
  const subtitleStyle = disponibile ? styles.subtitle : [styles.subtitle, styles.subtitleClosed];
  const navigation = useNavigation();
  const handlePress = () => {
      console.log(id)
      navigation.navigate(myroute)
  };

  return (
    <TouchableOpacity style={containerStyle} onPress={handlePress} disabled={!disponibile}>
      <View style={styles.content}>
        <Text style={textStyle}>{title}</Text>
        <Text style={subtitleStyle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
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
});

export default CardItemMenu;
