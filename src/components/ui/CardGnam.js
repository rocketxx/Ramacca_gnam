import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setRestaurantData } from '../../redux/restaurantActions';

const CardGnam = ({ title, image, subTitle, aperto,route,payloadRoute }) => {
  const navigation = useNavigation();
  const containerStyle = aperto ? styles.container : styles.containerClosed;
  const imageStyle = aperto ? styles.image : [styles.image, styles.imageClosed];
  const textStyle = aperto ? styles.title : [styles.title, styles.titleClosed];
  const subtitleStyle = aperto ? styles.subtitle : [styles.subtitle, styles.subtitleClosed];
  const dispatch = useDispatch();
  const handlePress = () => {
    if (aperto && route!=undefined) {
      navigation.navigate('OrderClientRoot', {  
        screen: 'RestaurantsHome',
        params: { idRest: payloadRoute },
      });

      //memorizza ristorante cliccato id: payloadRoute
      dispatch(setRestaurantData(payloadRoute, title));
    }
  };

  return (
    <TouchableOpacity style={containerStyle} onPress={handlePress} disabled={!aperto}>
      <View style={styles.imageContainer}>
        {!aperto && <Text style={styles.closedText}>Chiuso</Text>}
        <Image source={{ uri: image }} style={imageStyle} />
      </View>
      <View style={styles.content}>
        <Text style={textStyle}>{title}</Text>
        <Text style={subtitleStyle}>{subTitle}</Text>
      </View>
      <View style={styles.button}>
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
  button: {
    justifyContent: 'center',
    alignItems: 'center',
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

export default CardGnam;
