import React from 'react';
import { View, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MotiView, MotiText} from 'moti';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <MotiView style={styles.content} 
      from={{
        translateY: -150,
        opacity:0,
      }}
      animate={{
        translateY: 0,
        opacity:1,
      }}
      transition={{
        type:'timing',
        duration: 800,
        delay: 300,
      }}
      >
        <MotiText 
        style={styles.username}
        from={{
          translateX: -300
        }}
        animate={{
          translateX: 0
        }}
        transition={{
          type: 'timing',
          duration: 800,
          delay: 800
        }}
        >
          {name}
        </MotiText>

        <TouchableOpacity style={styles.buttonUser}>
          <Feather name='user' size={27} color={'#fff'}/>
        </TouchableOpacity>
      </MotiView>
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#002c58',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 60,
  },

  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  username: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: '#80a1f8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44/2,
  },
});