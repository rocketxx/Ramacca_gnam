import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { getUserInfo } from '../../util/auth';
import { ReadAllDocumentByCollection, WriteByCollectionAndId, getByCollectionAndId, getByCollectionWithWhere, getDataWithWhereAndCollection } from '../../repository/repository';
import CardGnam from '../../components/ui/CardGnam';

function WelcomeScreen() {
  const [userInfo, setUserInfo] = useState({});
  const [restaurants, setRestaurants] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('panini');
const PANINO = 'panini';
const PIZZA = 'pizza'
  useEffect(() => {
    const func = async () => {
      await getUserInfo().then((res) => {
        setUserInfo(res)
      })
    }
    func();
  }, []);

  useEffect(() => {
    ReadRestaurantsData();
  }, []);

  const OrderByState = (data) => {
    data.sort((a, b) => {
      if (a.aperto && !b.aperto) {
        return -1; // a viene prima di b
      } else if (!a.aperto && b.aperto) {
        return 1; // a viene dopo b
      } else {
        return 0; // mantieni l'ordine corrente
      }
    });
  };
  
  const handlePress = (category) => {
    setSelectedCategory(category);
  };

  const filteredRestaurants = selectedCategory
    ? restaurants.filter((item) => item.tipologiaCibo.includes(selectedCategory))
    : restaurants;

  const ReadRestaurantsData = () => {
    ReadAllDocumentByCollection('ristoranti')
      .then((results) => {
        OrderByState(results);
        setRestaurants(results);
      })
      .catch((error) => {
        console.log("Errore nella lettura dei dati:", error);
      });
  };

  return (
    <View style={styles.rootContainer}>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={[
            styles.button,
            selectedCategory === PANINO && styles.selectedButton
          ]}
          onPress={() => handlePress(PANINO)}
        >
          <Text
            style={[
              styles.buttonText,
              selectedCategory === PANINO && styles.selectedButtonText
            ]}
          >
            Panino
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            selectedCategory === PIZZA && styles.selectedButton
          ]}
          onPress={() => handlePress(PIZZA)}
        >
          <Text
            style={[
              styles.buttonText,
              selectedCategory === PIZZA && styles.selectedButtonText
            ]}
          >
            Pizza
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={filteredRestaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardGnam
            image={item.image}
            title={item.nome}
            subTitle={item.via}
            aperto={item.aperto}
            route={'OrderClientRoot'}
            payloadRoute={item.id}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default WelcomeScreen;

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
