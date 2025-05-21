import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Cart from '../components/Cart';
import ProductDetail from '../components/ProductDetail';
import ProductList from '../components/ProductList';
import { CartProvider, useCart } from '../contexts/CartContext';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProductStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ProductList"
      component={ProductList}
      options={{ title: 'Products' }}
    />
    <Stack.Screen
      name="ProductDetail"
      component={ProductDetail}
      options={{ title: 'Product Details' }}
    />
  </Stack.Navigator>
);

function CartTabIcon({ color, size }: { color: string; size: number }) {
  const { cart } = useCart();
  const count = cart.reduce((sum: number, item: { quantity: number }) => sum + item.quantity, 0);

  return (
    <View>
      <Ionicons name="cart" size={size} color={color} />
      {count > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 8,
            minWidth: 16,
            height: 16,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 2,
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {count}
          </Text>
        </View>
      )}
    </View>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Products') {
            const iconName = focused ? 'home' : 'home-outline';
            return <Ionicons name={iconName as any} size={size} color={color} />;
          } else if (route.name === 'Cart') {
            return <CartTabIcon color={color} size={size} />;
          }
        },
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: 'gray',
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
        options={{ title: 'Shopping Cart' }}
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