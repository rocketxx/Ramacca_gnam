// import { useEffect, useState } from '@react-native-firebase/database';
import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import { firebase } from '../../modules/firebase';
import { getUserInfo } from '../../util/auth';
import { WriteByCollectionAndId, getByCollectionAndId } from '../../repository/repository';
// import { getByCollectionAndId } from '../../repository/repository';


function WelcomeAdminScreen() {
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
//   const func = async () => {
//       await getByCollectionAndId('courses','64RqlG8KhjK8GYuTWwjQ')?.then((doc)=>{
//         // console.log(doc)
//       })
//     }
//     func();
//   }, [])

//   useEffect(() => {
//     const func = async () => {
//         await WriteByCollectionAndId('courses','LWmqBEQ7kGOLNdDK3SuR',{
//           name: "Los Angeles",
//           state: "CA",
//           country: "USA"
//         });
//       }
//       func();
//     }, [])

  

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

      <Text style={styles.title}>{userInfo?.email}</Text>
      <Text style={styles.title}>Benvenuto!</Text>
      <Text>ADMIN!</Text>
    </View>
  );
}

export default WelcomeAdminScreen;

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