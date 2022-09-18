import React from 'react';
import { TextInput, FlatList, StyleSheet, Text, View} from 'react-native';
import products_data from './products.json';
import ProductsCard from './components/ProductsCard';
 
const App = () => {
  const renderProducts = ({item}) => <ProductsCard products={item} />

  return (
      <View style={styles.contanier}>
        <Text style={styles.header}>Patika Store</Text>

        <TextInput
          style={styles.input}
          placeholder="Search.."
        />

        <FlatList
          numColumns={2}
          data={products_data}
          renderItem={renderProducts}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  contanier:{
      flex:1,
      backgroundColor:"white",
  },
  header:{
      fontSize:40,
      fontWeight:"bold",
      color:"purple",
      marginLeft:10,
  },
  input: {
    height: 40,
    margin: 10,
    borderRadius:5,
    padding: 10,
    backgroundColor:"#eee"
  },
})

export default App;
