import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function BuyButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  btn: {
    width: '90%',
    height: 50,
    backgroundColor: '#17181a',
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnText: {
    fontSize: 17,
    color: '#fff'
  }
})