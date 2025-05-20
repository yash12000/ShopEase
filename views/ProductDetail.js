import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from 'react-native';
import { CartContext } from '../contexts/CartContext';

export default function ProductDetail({ route }) {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text>Rating: {product.rating.rate} ({product.rating.count} reviews)</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: { height: 200, resizeMode: 'contain', marginBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  price: { fontSize: 16, marginBottom: 10 },
  description: { marginVertical: 15 }
});