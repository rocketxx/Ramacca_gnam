import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/styles';

const CardItemMenu = ({ title, image, subTitle, disponibile }) => {
  const [quantity, setQuantity] = useState(0);

  const containerStyle = disponibile ? styles.container : styles.containerClosed;
  const imageStyle = disponibile ? styles.image : [styles.image, styles.imageClosed];
  const textStyle = disponibile ? styles.title : [styles.title, styles.titleClosed];
  const subtitleStyle = disponibile ? styles.subtitle : [styles.subtitle, styles.subtitleClosed];

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handlePress = () => {
    // Gestisce l'azione al click sulla card
  };

  return (
    <TouchableOpacity style={containerStyle} onPress={handlePress} disabled={!disponibile}>
      <View style={styles.imageContainer}>
        {!disponibile && <Text style={styles.closedText}>Chiuso</Text>}
        <Image source={{ uri: image }} style={imageStyle} />
      </View>
      <View style={styles.content}>
        <Text style={textStyle}>{title}</Text>
        <Text style={subtitleStyle}>{subTitle}</Text>
      </View>
      <View style={styles.counter}>
        <TouchableOpacity style={styles.button} onPress={handleDecrement} disabled={!disponibile || quantity === 0}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity style={styles.button} onPress={handleIncrement} disabled={!disponibile}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
  },
  containerClosed: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
  },
  imageContainer: {
    height: 150,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  imageClosed: {
    opacity: 0.5,
  },
  content: {
    padding: 16,
    paddingRight: 200,
    paddingBottom: 28
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  titleClosed: {
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },
  subtitleClosed: {
    color: '#fff',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 20,
    marginBottom: 20
  },
  button: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primary500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  closedText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -30 }, { translateY: -10 }],
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default CardItemMenu;
