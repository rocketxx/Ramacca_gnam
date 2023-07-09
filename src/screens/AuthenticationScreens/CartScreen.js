import { useEffect, useState } from 'react'
import {Text} from 'react-native'
import { getUserInfo } from '../../util/auth'
import Button from '../../components/ui/Button'
import { loadDataToFirebase } from '../../repository/repository'

function CartScreen()
{
    const [userInfo, setUserInfo] = useState({})
    useEffect(() => {
      const func = async () => {
        await getUserInfo().then((res) => {
          setUserInfo(res)
        })
      }
      func();
    }, [])
    return (
        <>
        <Text>Carrello Cliente</Text>
        <Text>{userInfo?.email}</Text>
        {/* <Button onPress={() => loadDataToFirebase()}>LOAD</Button> */}
        </>
    )
}

export default CartScreen;