import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../util/auth';
import Button from '../../components/ui/Button';
import QuantityCounter from './QuantityCounter';
import { getDataWithWhereAndCollectionArrayList } from '../../repository/repository';
//PER RISOLVERE IL PROBLEMA DEL RENDERING CHE NASCONDE L'ULTIMO ITEM, VA IMPLEMENTATA LA PAGINAZIONE
const ListItemCondimenti = ({ info }) => {
    const [userInfo, setUserInfo] = useState({});
    const [selectedItems, setSelectedItems] = useState([]);
    const [ingredienti, setIngredienti] = useState([]);

    const { id, title } = useSelector((state) => state.restaurant);
    useEffect(() => {
        leggiDati();
      }, []);
    
      const leggiDati = () => {
        getDataWithWhereAndCollectionArrayList("ingredienti", "idRistorante", "==", id)
          .then((results) => {
            const ingredientiArray = Object.values(results);
            setIngredienti(ingredientiArray);

          })
          .catch((error) => {
            console.log("Errore nella lettura dei dati in listItemCondimenti:", error);
          });
      };

    const handleItemPress = (item) => {
        // Aggiungi o rimuovi l'elemento selezionato dalla lista dei selezionati
        if (selectedItems.some((selectedItem) => selectedItem.id === item.id)) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.id !== item.id));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const handlePrintSelection = () => {
        console.log(selectedItems);
    };

    // Dati di mock
    // const ingredienti = [
    //     { id: 1, title: 'Condimento 1', description: 'Descrizione del condimento 1', category: 'Categoria 1' },
    //     { id: 2, title: 'Condimento 2', description: 'Descrizione del condimento 2', category: 'Categoria 1' },
    //     { id: 3, title: 'Condimento 3', description: 'Descrizione del condimento 3', category: 'Categoria 2' },
    //     { id: 4, title: 'Condimento 4', description: 'Descrizione del condimento 4', category: 'Categoria 2' },
    //     { id: 5, title: 'Condimento 4', description: 'Descrizione del condimento 4', category: 'Categoria 2' },
    //     { id: 6, title: 'Condimento 4', description: 'Descrizione del condimento 4', category: 'Categoria 2' },
    //     { id: 7, title: 'Condimento 4', description: 'Descrizione del condimento 4', category: 'Categoria 2' },
    //     { id: 8, title: 'Condimento 4', description: 'Descrizione del condimento 4', category: 'Categoria 3' },
    //     { id: 9, title: 'Condimento 4', description: 'Descrizione del condimento 4', category: 'Categoria 3' },
    //     { id: 10, title: 'Condimento 4', description: 'Descrizione del condimento 4', category: 'Categoria 3' },
    //     { id: 11, title: 'Condimento 4', description: 'Descrizione del condimento 4', category: 'Categoria 3' },
    // ];

    // Funzione per ottenere un array unico di categorie
    const getUniqueCategories = () => {
        const categories = ingredienti.map((item) => item.category);
        return [...new Set(categories)];
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {getUniqueCategories().map((category) => (
                    <View key={category}>
                        <Text style={styles.categoryTitle}>{category}</Text>
                        {ingredienti
                            .filter((item) => item.category === category)
                            .map((item) => (
                                <TouchableOpacity
                                    key={item.id}
                                    style={[
                                        styles.itemContainer,
                                        selectedItems.some((selectedItem) => selectedItem.id === item.id) &&
                                            styles.selectedItem,
                                    ]}
                                    onPress={() => handleItemPress(item)}
                                >
                                    <View style={styles.itemContent}>
                                        <Text style={styles.itemTitle}>{item.title}</Text>
                                        <Text style={styles.itemDescription}>{item.description}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                    </View>
                ))}
            </ScrollView>
            <View style={styles.footer}>
                {/* <QuantityCounter style={styles.quantityCounter} /> */}
                {selectedItems.length > 0 && (
                    <>
                        <Button onPress={handlePrintSelection}>
                            Aggiungi All'Ordine
                        </Button>
                        <Text></Text>
                        <QuantityCounter id={30}></QuantityCounter>
                    </>
                )}
            </View>
            </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 16,
        // alignSelf: 'center',  //commenta questo e vedi
        paddingTop: 0,
    },
    categoryTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    itemContainer: {
        marginBottom: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
        elevation: 2,
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
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'column-reverse',
        // alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 25,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    quantityCounter: {
        flex: 1,
        marginRight: 16,
    },
    addButton: {
        flex: 1,
    },
});

export default ListItemCondimenti;
