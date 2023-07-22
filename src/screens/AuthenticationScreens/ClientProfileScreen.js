import { useEffect } from 'react';
import {Text} from 'react-native';
import { loadDataIngredientiToFirebase, loadDataMenuToFirebase } from '../../repository/repository';
import Button from '../../components/ui/Button';

function ClientProfileScreen()
{
    return (
        <>
            <Text>Profilo Cliente</Text>
            <Button onPress={() => loadDataMenuToFirebase()}>LOAD base pizza e panini</Button>
            <Text>Profilo Cliente</Text>
            <Button onPress={() => loadDataIngredientiToFirebase()}>LOAD ingredienti</Button>
        </>
    )
}

export default ClientProfileScreen;