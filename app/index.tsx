import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Cart from "../components/Cart";
import ProductDetail from "../components/ProductDetail";
import ProductList from "../components/ProductList";
import { CartProvider, useCart } from "../contexts/CartContext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Cart icon with badge for header
type CartHeaderIconProps = {
  navigation: any;
};

function CartHeaderIcon({ navigation }: CartHeaderIconProps) {
  const { cart } = useCart();
  const count = cart.reduce(
    (sum: number, item: { quantity: number }) => sum + item.quantity,
    0
  );

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Cart")}
      style={{ marginRight: 15 }}
    >
      <View>
        <Ionicons name="cart" size={24} color="#2196F3" />
        {count > 0 && (
          <View
            style={{
              position: "absolute",
              right: -6,
              top: -3,
              backgroundColor: "red",
              borderRadius: 8,
              minWidth: 16,
              height: 16,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 2,
            }}
          >
            <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
              {count}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const ProductStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProductList"
      component={ProductList}
      options={({ navigation }) => ({
        title: "ShopEase",
        headerRight: () => <CartHeaderIcon navigation={navigation} />,
      })}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetail}
      options={({ navigation }) => ({
        title: "Product Details",
        headerRight: () => <CartHeaderIcon navigation={navigation} />,
      })}
    />
  </Stack.Navigator>
);

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Products") {
            const iconName = focused ? "home" : "home-outline";
            return (
              <Ionicons name={iconName as any} size={size} color={color} />
            );
          } else if (route.name === "Cart") {
            const iconName = focused ? "cart" : "cart-outline";
            return (
              <Ionicons name={iconName as any} size={size} color={color} />
            );
          }
        },
        tabBarActiveTintColor: "#2196F3",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Products"
        component={ProductStack}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{ title: "Shopping Cart" }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainTabs />
    </CartProvider>
  );
}
