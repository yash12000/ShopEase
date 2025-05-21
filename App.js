import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import { CartProvider } from './contexts/CartContext';

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

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Products') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Cart') {
                iconName = focused ? 'cart' : 'cart-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
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
      </NavigationContainer>
    </CartProvider>
  );
}
