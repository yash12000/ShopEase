import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

/**
 * ProductList Component
 * Displays a grid of products fetched from the Fake Store API
 * Each product shows its image, title, price, and rating
 */
const ProductList = () => {
  // State for storing products and loading status
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  // Fetch products when component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  /**
   * Fetches products from the Fake Store API
   * Updates the products state and loading status
   */
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  /**
   * Renders each product card in the grid
   * @param {Object} item - The product data
   */
  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>★ {item.rating.rate}</Text>
          <Text style={styles.ratingCount}>({item.rating.count} ratings)</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  // Show loading indicator while fetching products
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

// Styles for the ProductList component
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  productInfo: {
    marginTop: 8,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2196F3",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    color: "#FFD700",
    marginRight: 4,
  },
  ratingCount: {
    color: "#666",
    fontSize: 12,
  },
});

export default ProductList;
