import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../util/auth'
import Button from '../../components/ui/Button';

const ListItemCondimenti = ({ info }) => {
  const [userInfo, setUserInfo] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  
  useEffect(() => {
    const func = async () => {
      // Carica le informazioni dell'utente
    };
    func();
  }, []);

  const handleItemPress = (item) => {
    // Aggiungi o rimuovi l'elemento selezionato dalla lista dei selezionati
    if (selectedItems.some(selectedItem => selectedItem.id === item.id)) {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handlePrintSelection = () => {
    console.log(selectedItems);
  };

  // Dati di mock
  const mockData = [
    { id: 1, title: 'Condimento 1', description: 'Descrizione del condimento 1' },
    { id: 2, title: 'Condimento 2', description: 'Descrizione del condimento 2' },
    { id: 3, title: 'Condimento 3', description: 'Descrizione del condimento 3' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista Condimenti: {info}</Text>
      {mockData.map(item => (
        <TouchableOpacity
          key={item.id}
          style={[styles.itemContainer, selectedItems.some(selectedItem => selectedItem.id === item.id) && styles.selectedItem]}
          onPress={() => handleItemPress(item)}
        >
          <View style={styles.itemContent}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
      {selectedItems.length > 0 && <Button onPress={handlePrintSelection}>Aggiungi All'Ordine</Button>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    elevation: 2, // Ombra
  },
  selectedItem: {
    backgroundColor: 'lightgreen',
  },
  itemContent: {
    padding: 16,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemDescription: {
    fontSize: 16,
    color: '#888',
  },
});

export default ListItemCondimenti;
