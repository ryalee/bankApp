import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header/';
import Balance from '../../components/Balance/';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id:1,
    label: 'Boleto da conta de luz',
    value: '300,90',
    date: '17/09/2023',
    type: 0 //Despesas 
  },

  {
    id: 2,
    label: 'Pix de Cliente X',
    value: '2.500,00',
    date: '18/09/2023',
    type: 1 //entradas / receita
  },

  {
    id: 3,
    label: 'Salário',
    value: '9.500,00',
    date: '30/09/2023',
    type: 1 //entradas / receita
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light"/>

      <Header name='Ryan'/>
      <Balance saldo='9.250,00' gastos='527,00'/>
      <Actions/>

      <Text style={styles.title}>Ultimas Movimentações</Text>
      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator = {false}
        renderItem={ ({item}) => <Movements data={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    marginRight: 14,
    marginTop: 30, 
    marginBottom: 18,
  },

  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
