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
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../util/auth'
import Button from '../../components/ui/Button';

const ListItemCondimenti = ({info}) => {
      const [userInfo, setUserInfo] = useState({})
      const counters = useSelector(state => state.counters);
      // console.log(counters)
    useEffect(() => {
      const func = async () => {

      }
      func();
    }, [])


  return (

    <View style={styles.container}>
      <Text style={styles.title}>Lista Condimenti: {info}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop:150
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

export default ListItemCondimenti;