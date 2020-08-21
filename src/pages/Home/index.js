import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { MaterialIcons } from '@expo/vector-icons';
import Shoes from '../../components/Shoes';

export default function Home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>TÊNIS</Text>
          <Text style={[styles.text, { color: '#cececf' }]}>•</Text>
          <Text style={[styles.text, { color: '#cececf' }]}>Masculino</Text>

          <TouchableOpacity style={{ position: 'absolute', right: 0 , alignSelf: 'center' }}>
            <MaterialIcons
              name="filter-list"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes
            img={require('../../assets/1.png')}
            cost='R$139,99'
            onClick={() => navigation.navigate('Detail')}
          >
            Nike Joyride Dual
          </Shoes>  

          <Shoes
            img={require('../../assets/2.png')}
            cost='R$279,99'
            onClick={() => navigation.navigate('Detail')}
          >
            Nike Downshifer 10
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/3.png')} cost='R$299,99'>
            Nike Squidward Tentacles
          </Shoes>
        
          <Shoes img={require('../../assets/4.png')} cost='R$309,99'>
            Nike Epic React Flynknit 2
          </Shoes>
        </View>
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/5.png')} cost='R$199,99'>
            Nike Run
          </Shoes>
        
          <Shoes img={require('../../assets/6.png')} cost='R$499,99'>
            Nike Native
          </Shoes>
        </View>
        

        
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },

  header: {
    marginBottom: 8
  },

  image: {
    width: '100%'
  },

  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%',
  },

  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },

  line: {
    borderBottomWidth: 2,
    borderBottomColor: '#D8D8D8'
  }
})