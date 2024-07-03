import React, { useContext } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { CartContext } from '../context/CartContext';

const Checkout = () => {
  const { cart, removeItemFromCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.product}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.productDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeItemFromCart(item.id)}>
        <Text style={styles.removeButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
          <TouchableOpacity style={styles.searchButton}>
            <Image source={require('../assets/Search.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Checkout</Text>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.productList}
        />
        <View style={styles.footer}>
          <Text style={styles.totalLabel}>EST. TOTAL</Text>
          <Text style={styles.totalPrice}>${getTotalPrice()}</Text>
        </View>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Image source={require('../assets/shoppingBag.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  searchButton: {
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Arial', 
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  productList: {
    paddingHorizontal: 10,
  },
  product: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6347',
  },
  removeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6347',
    borderRadius: 20,
    width: 35,
    height: 35,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff6347',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  navButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ff6347',
    borderRadius: 10,
  },
  navIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  navText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Checkout;
