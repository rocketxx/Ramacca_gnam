// store.js
import { configureStore } from '@reduxjs/toolkit';
import countersReducer from './reducers';
import restaurantReducer from './restaurantReducer';
import menuReducer from './menuReducer';
import baseReducer from './baseReducer';

const store = configureStore({
  reducer: {
    //counters è il nome che utilizzo per leggere lo stato del/dei reducers
    counters: countersReducer,
    restaurant: restaurantReducer,
    base: baseReducer,
    menu: menuReducer,
    
    //aggiungi altri reducers qui amìo
  },
});

export default store;
//usage base e restaurant:
// const { id, title } = useSelector((state) => state.restaurant);

//usage menu reducer: 
// const addItemToMenu = () => {
//   const newItem = {
//     idRestaurants: 1,
//     baseId: 1,
//     quantity: 2,
//     ingredients: [
//       {
//         category: 'Categoria 1',
//         description: 'Descrizione del condimento 2',
//         id: 2,
//         title: 'Condimento 2',
//       },
//       {
//         category: 'Categoria 2',
//         description: 'Descrizione del condimento 3',
//         id: 3,
//         title: 'Condimento 3',
//       },
//     ],
//   };
//   dispatch(addToMenu(newItem.idRestaurants, newItem.baseId, newItem.quantity, newItem.ingredients));
// };