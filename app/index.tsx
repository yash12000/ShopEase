import { View, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { useRouter } from 'expo-router';

type Product = {
  id: number;
  [key: string]: any;
};

export default function HomeScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(console.error);
  }, []);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard
          item={item}
          onPress={() => router.push(`/product/${item.id}`)}
        />
      )}
    />
  );
}
