// import { useEffect, useState } from 'react'
// import {Text} from 'react-native'
// import { getUserInfo } from '../../util/auth'
// import Button from '../../components/ui/Button'
// import { loadDataToFirebase } from '../../repository/repository'

// function CartScreen()
// {
//     const [userInfo, setUserInfo] = useState({})
//     useEffect(() => {
//       const func = async () => {
//         await getUserInfo().then((res) => {
//           setUserInfo(res)
//         })
//       }
//       func();
//     }, [])
//     return (
//         <>
//         <Text>Carrello Cliente</Text>
//         <Text>{userInfo?.email}</Text>
//         {/* <Button onPress={() => loadDataToFirebase()}>LOAD</Button> */}
//         </>
//     )
// }

// export default CartScreen;

// import React from 'react';
import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';

const CartScreen = () => {
      const [userInfo, setUserInfo] = useState({})
  const data = useSelector((state) => state.data);
    useEffect(() => {
      const func = async () => {
        await getUserInfo().then((res) => {
          setUserInfo(res)
        })
        console.log(data)
      }
      func();
    }, [])
  return (

    <View style={styles.container}>
      {/* <Text style={styles.title}>Dati Salvati</Text>
      {data.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Text style={styles.itemQuantity}>{item.quantity}</Text>
          <Text>{userInfo?.email}</Text>
        </View>
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 16,
    color: '#888',
  },
  itemQuantity: {
    fontSize: 16,
    color: 'blue',
  },
});

export default CartScreen;
