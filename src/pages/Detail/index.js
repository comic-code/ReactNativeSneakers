import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import Dot from '../../components/Dot';
import SizeShoes from '../../components/SizeShoes';
import BuyButton from '../../components/BuyButton';
import Footer from '../../components/Footer';

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Nike Downshifter 10'
  })

  return (
    <ScrollView>
      <Image 
        source={require('../../assets/detail.png')}
        style={styles.image}
        resizeMode='cover'
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 }]}>
            R$ 280,99
          </Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 }]}>
            Nike Downshifter 10
          </Text>
        </View>

        <View style={styles.dotContainer}>
          <Dot color='#2379f4'/>
          <Dot color='#fb6e53'/>
          <Dot color='#ddd'/>
          <Dot color='#000'/>
        </View>
     
        <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeShoes bgColor="#17181a" color="#fff">42</SizeShoes>
            <SizeShoes>40</SizeShoes>
            <SizeShoes>39</SizeShoes>
            <SizeShoes>37</SizeShoes>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Nike Downshifter 10
          </Text>
          <Text style={styles.textContent}>
            O Tênis NIke Masculino Downshifter 10 traz amortecimento e suporte
            atualizados, para garantir uma corrida estável e confortável. Esse tênis de
            corrida é confeccionado em material respirável, cabedal em couro sintético.
          </Text>
          <Text style={styles.textList}>
            - Categoria: Amortecimento
          </Text>
          <Text style={styles.textList}>
            - Material: Mesh
          </Text>
        </View>
        
        <BuyButton />

        <View style={styles.line}/>

        <Footer />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },

  image: {
    width: '100%'
  },

  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },

  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%'

  },

  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },

  textList: {
    fontSize: 15,
    lineHeight: 25
  },

  line: {
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%'
  }

})