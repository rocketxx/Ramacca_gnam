import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity } from '../../redux/actions';

const QuantityCounter = ({ id }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const counters = useSelector(state => state.counters);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    dispatch(updateQuantity(id, quantity));
    leggiCounterCorretto(counters);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      dispatch(updateQuantity(id, quantity));
    }
  };

  const leggiCounterCorretto = (countersObject) => {
    // const tmp = Object.entries(countersObject).map(([id, quantity]) => ({
    //   id: id,
    //   quantity: quantity
    // }));

    console.log(countersObject);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleDecrement}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantity}>{quantity}</Text>
      <TouchableOpacity style={styles.button} onPress={handleIncrement}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
});

export default QuantityCounter;
