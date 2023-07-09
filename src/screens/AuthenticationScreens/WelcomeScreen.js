import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import jwt_decode from "jwt-decode";
// import { useEffect, useState } from '@react-native-firebase/database';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { firebase } from '../../modules/firebase'
import { AuthContext } from "../../store/auth-contenxt";
import { getUserInfo } from '../../util/auth';
import { ReadAllDocumentByCollection, WriteByCollectionAndId, getByCollectionAndId, getByCollectionWithWhere, getDataWithWhereAndCollection } from '../../repository/repository';

function WelcomeScreen() {
  const [userInfo, setUserInfo] = useState({})
  useEffect(() => {
    const func = async () => {
      await getUserInfo().then((res) => {
        setUserInfo(res)
      })
    }
    func();
  }, [])

  // useEffect(() => {
  //   leggiDati();
  // }, []);
  
    const leggiDati = () => {
      ReadAllDocumentByCollection('ristoranti')
        .then((results) => {
          console.log(results)
        })
        .catch((error) => {
              console.log("Errore nella lettura dei dati:", error);
            });
        };

  ////lettura
  //   todo.get().then((doc) => {
  //     if (doc.exists) {
  //         console.log("Document data:", doc.data());
  //     } else {
  //         console.log("No such document!");
  //     }
  // }).catch((error) => {
  //     console.log("Error getting document:", error);
  // });

  //scrittura
  // firebase.auth().setc
  // const todo2 = firebase.firestore().collection('todos').doc("LWmqBEQ7kGOLNdDK3SuR").set({
  //   name: "Los Angeles",
  //   state: "CA",
  //   country: "USA"
  // })
  // .then(() => {
  //   console.log("Document successfully written!");
  // })
  // .catch((error) => {
  //   console.error("Error writing document: ", error);
  // });
  //

  return (
    <View style={styles.rootContainer}>
      {/* <FlatList
        data={users}
        numColumns={1}
        renderItem={({item}) =>(
          <Pressable>
            <View>
              <Text>{item.text1}</Text>
            </View>
          </Pressable>
        )}
      ></FlatList> */}
      <Text style={styles.title}>Benvenuto!</Text>
      <Text style={styles.title}>{userInfo?.email}</Text>
      <Text>Utente!</Text>
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