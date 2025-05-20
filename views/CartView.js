import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TextInput } from 'react-native';
import { CartContext } from '../contexts/CartContext';

export default function CartScreen() {
  const { cart, updateQty, total } = useContext(CartContext);

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text style={styles.name}>{item.title}</Text>
                <Text>${item.price.toFixed(2)}</Text>
                <TextInput
                  keyboardType="numeric"
                  value={item.qty.toString()}
                  onChangeText={(val) => updateQty(item.id, parseInt(val) || 0)}
                  style={styles.input}
                />
              </View>
            )}
          />
          <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
          <Button title="Checkout" onPress={() => alert('Order Placed!')} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  item: { padding: 10, marginVertical: 5, backgroundColor: '#e0e0e0', borderRadius: 5 },
  name: { fontWeight: 'bold' },
  input: { borderBottomWidth: 1, width: 40, textAlign: 'center', marginTop: 5 },
  total: { fontSize: 18, fontWeight: 'bold', textAlign: 'right', marginVertical: 10 }
});