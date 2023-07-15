import { useNavigation, useRoute } from '@react-navigation/core';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Button from '../../components/ui/Button';
import { loadDataMenuToFirebase, getDataWithWhereAndCollectionArrayList } from '../../repository/repository';
import { useEffect, useState } from 'react';
import CardGnam from '../../components/ui/CardGnam';
import CardItemMenu from '../../components/ui/CardItemMenu';
import ReduxProvider from '../../redux/store';
import { useSelector } from 'react-redux';
import { selectCount } from '../../redux/reducers';
import ButtonCustom from '../../components/ui/ButtonCustom';

function RestaurantsHomeScreen() {
  const [menuData, setMenuData] = useState([])
  const route = useRoute();
  const navigation = useNavigation();
  const { params } = route;
  const idRest = params?.idRest;
  var mockID = 0;
  const storedData = useSelector((state) => state.item);
  useEffect(() => {
    leggiDati();
  }, []);

  const leggiDati = () => {
    getDataWithWhereAndCollectionArrayList("menu", "idRistorante", "==", idRest)
      .then((results) => {
        setMenuData(results)
      })
      .catch((error) => {
        console.log("Errore nella lettura dei dati:", error);
      });
  };

  function GoToCustom() {
    navigation.navigate('PiattoCustom')
  }
  return (
    <>
      <View style={styles.rootContainer}>
        <ButtonCustom title={"Panino Personalizzato"} onPress={GoToCustom}></ButtonCustom>
        <FlatList
          data={menuData}
          renderItem={({ item }) => (
            <CardItemMenu
              id={mockID += 1}
              image={"https://cdn.pixabay.com/photo/2014/10/19/20/59/hamburger-494706_960_720.jpg"}
              title={item.nome}
              subTitle={item.descrizione}
              disponibile={item.disponibile}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  )
}

export default RestaurantsHomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#008000',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  selectedButtonText: {
    color: '#fff',
  },
});
