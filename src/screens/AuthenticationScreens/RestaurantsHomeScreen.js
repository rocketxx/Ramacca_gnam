import { useRoute } from '@react-navigation/core';
import {Text} from 'react-native';



function RestaurantsHomeScreen()
{
    const route = useRoute();
const { data } = route.params;
console.log(data);
    return (
        <Text>RestaurantsHomeScreen</Text>
    )
}

export default RestaurantsHomeScreen;