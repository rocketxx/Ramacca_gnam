import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ButtonCustom = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          {/* //per gestire il troncamento del testo in caso di superamento della larghezza: numberOfLines={1} ellipsizeMode="tail" */}
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail"> 
            {title}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: -7,
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'green',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 4, // Aggiunge ombra solo su Android
    shadowColor: 'black', // Aggiunge ombra solo su iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  titleContainer: {
    flex: 1,
    maxWidth: 250, // Imposta la larghezza massima desiderata
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  iconContainer: {
    backgroundColor: 'transparent',
  },
});

export default ButtonCustom;
