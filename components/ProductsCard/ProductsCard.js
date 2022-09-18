import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';

const ProductsCard = ({products}) => {

    return (
      <TouchableOpacity style={styles.container}>
        <Image style={styles.image}  source={{uri: products.imgURL}} />
        <View style={styles.inner_container}>
            <Text style={styles.title}>{products.title}</Text>
            <Text style={styles.price}>{products.price}</Text>
            {products.inStock == true ? (<></>) : (<Text style={styles.inStock}>Stokta Yok</Text>)}
        </View>
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      margin: 10,
      borderRadius: 10,
      backgroundColor: '#f5f5f5',
    },
    inner_container:{
        flex:1,
        flexDirection:"column",
        justifyContent:"space-between",
        padding: 5,
        borderRadius:10
    },
    image: {
      width: '100%',
      height: Dimensions.get('window').height / 4,
      resizeMode: 'contain',
      borderRadius: 10,
      backgroundColor: "#f5f5f5"
    },
    title: {
      fontWeight: "bold",
      fontSize: 18,
      color: "#010101",
      marginTop: 5
    },
    price:{
        marginTop: 5,
        color: "#444",
        fontWeight: "bold",
        fontSize: 18,
    },
    inStock: {
        color: "red",
        marginTop: 5,
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 18,
    },
  });
  
  export default ProductsCard;