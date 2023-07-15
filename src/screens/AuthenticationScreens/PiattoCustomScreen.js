import { useNavigation } from '@react-navigation/core';
import {Text} from 'react-native';
import Button from '../../components/ui/Button';
import Finestra from '../../components/ui/Finestra';

function PiattoCustomScreen()
{
    const navigation = useNavigation();
    test = () =>
    {
        navigation.goBack()
    }
    return (
        <>
            <Text>CustomScreen</Text>
            <Button onPress={test}>Indietro</Button>
        </>
    )
}

export default PiattoCustomScreen;