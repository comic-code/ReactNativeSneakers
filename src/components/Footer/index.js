import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Shoes from '../Shoes';

export default function Footer() {
  return (
    <View>
      <Text style={styles.title}>
        VOCÊ TAMBÉM PODE GOSTAR
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/1.png')} cost="139,99">
              Nike Joyride Dual 
            </Shoes>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/5.png')} cost="299,99">
              Nike Joyride Dual 
            </Shoes>
          </View>
          
          <View style={{ marginHorizontal: 10 }}>
            <Shoes img={require('../../assets/3.png')} cost="199,99">
              Nike Run
            </Shoes>
          </View>
        </ScrollView> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  }
})