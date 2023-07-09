import { useEffect, useState } from 'react'
import {Text} from 'react-native'
import { getUserInfo } from '../../util/auth'

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
        </>
    )
}

export default CartScreen;