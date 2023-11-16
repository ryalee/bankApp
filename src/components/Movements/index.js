import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MotiView, AnimatePresence, MotiText } from 'moti';

export default function Movements({data}) {
  const [showValue, setShowValue] = useState(false);

 return (
  <TouchableOpacity style={styles.container} activeOpacity={.6} onPress={() => setShowValue(!showValue)}>
    <Text style={styles.date}>{data.date}</Text>

    <View style={styles.content}>
      <Text style={styles.label}>{data.label}</Text>

      { showValue ? (
        <AnimatePresence exitBeforeEnter>
          <MotiText 
            style={data.type === 1 ? styles.value : styles.expenses}
            from={{
              translateX: 100
            }}
            animate={{
              translateX: 0,
            }}
            transition={{
              type: 'spring',
              duration: 900,
            }}
          >
            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
          </MotiText>  
        </AnimatePresence> 
        ) : ( 
        <AnimatePresence> 
          <View 
            style={styles.skeleton}
            from={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{type: 'timing'}}
          ></View>
        </AnimatePresence> )
      }
    </View>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.4,
    borderBottomColor: '#002c58',
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 8,
    marginLeft: 14,
  },

  date: {
    color: '#808080',
    fontWeight: 'bold',
    marginLeft: 14,
  },

  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#008000',
    marginRight: 20,
  },

  expenses: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff0000',
    marginRight: 20,
  },

  skeleton: {
    marginTop: 6,
    width: 80,
    height: 15,
    marginRight: 20,
    borderRadius: 8,
    backgroundColor: '#dadada'
  },
})