import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductList from './views/ProductList';
import ProductDetail from './views/ProductDetail';
import CartScreen from './views/CartScreen';
import { CartProvider } from './contexts/CartContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Products" component={ProductList} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeTabs} options={{ headerShown: false }} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: 'Details' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
