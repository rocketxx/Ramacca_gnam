import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import jwt_decode from "jwt-decode";
// import { useEffect, useState } from '@react-native-firebase/database';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { firebase } from '../../modules/firebase'
import { AuthContext } from "../../store/auth-contenxt";
import { getUserInfo } from '../../util/auth';
import { ReadAllDocumentByCollection, WriteByCollectionAndId, getByCollectionAndId, getByCollectionWithWhere, getDataWithWhereAndCollection } from '../../repository/repository';
import CardGnam from '../../components/ui/CardGnam';

function WelcomeScreen() {
  const [userInfo, setUserInfo] = useState({})
  const [restaurants, setRestaurants] = useState({})
  useEffect(() => {
    const func = async () => {
      await getUserInfo().then((res) => {
        setUserInfo(res)
      })
    }
    func();
  }, [])

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
  
  
    const ReadRestaurantsData = () => {
      ReadAllDocumentByCollection('ristoranti')
        .then((results) => {
          console.log(results)
          OrderByState(results)
          setRestaurants(results)
        })
        .catch((error) => {
              console.log("Errore nella lettura dei dati:", error);
            });
        };

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={restaurants}
        numColumns={1}
        renderItem={({item}) =>(
          <Pressable>
          <CardGnam image={item.image} title={item.nome} subTitle={item.via} aperto={item.aperto}></CardGnam>
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      ></FlatList>
      {/* <Text style={styles.title}>Benvenuto!</Text>
      <Text style={styles.title}>{userInfo?.email}</Text>
      <Text>Utente!</Text> */}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});