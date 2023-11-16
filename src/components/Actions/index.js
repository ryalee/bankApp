import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Touchable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
 return (
  <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
    <TouchableOpacity style={styles.actionButton}>
      <View style={styles.areaButton}>
        <AntDesign name='addfolder' size={26} color={'#000'}/>
      </View>

      <Text style={styles.labelButton}>Entradas</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
      <View style={styles.areaButton}>
        <AntDesign name='tagso' size={26} color={'#000'}/>
      </View>

      <Text style={styles.labelButton}>Compras</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
      <View style={styles.areaButton}>
        <AntDesign name='creditcard' size={26} color={'#000'}/>
      </View>

      <Text style={styles.labelButton}>Cartão</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
      <View style={styles.areaButton}>
        <AntDesign name='barcode' size={26} color={'#000'}/>
      </View>

      <Text style={styles.labelButton}>Pagar</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
      <View style={styles.areaButton}>
        <AntDesign name='linechart' size={26} color={'#000'}/>
      </View>

      <Text style={styles.labelButton}>Investir</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.actionButton}>
      <View style={styles.areaButton}>
        <AntDesign name='setting' size={26} color={'#000'}/>
      </View>

      <Text style={styles.labelButton}>Conta</Text>
    </TouchableOpacity>
  </ScrollView>
 );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginBottom: 40,
    marginTop: 50,
    paddingEnd: 20,
    paddingStart: 20,
  },

  actionButton: {
    alignItems: 'center',
    marginRight: 32,
  },

  areaButton: {
    backgroundColor: '#dadada',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center', 
  },

  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',

  },
})