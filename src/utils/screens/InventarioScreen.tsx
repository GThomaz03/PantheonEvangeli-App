import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { CharacterContext } from '../context/CharacterContext';



const InventarioScreen = () => {
  const { personagem } = useContext(CharacterContext);
  const { inventario } = personagem;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Inventário</Text>
      <Text>Peso Total: {inventario.pesoTotal} / {inventario.pesoMax}</Text>
      <Text>Carteira: F${inventario.carteira}</Text>

      <Text style={styles.sectionTitle}>Armas</Text>
      {inventario.armas.map((item, index) => (
        <Text key={index}>{item.nome}: {item.descricao}</Text>
      ))}

      <Text style={styles.sectionTitle}>Consumíveis</Text>
      {inventario.consumiveis.map((item, index) => (
        <Text key={index}>{item.nome}: {item.descricao}</Text>
      ))}

      <Text style={styles.sectionTitle}>Itens Chave</Text>
      {inventario.itensChave.map((item, index) => (
        <Text key={index}>{item.nome}: {item.descricao}</Text>
      ))}
    </ScrollView>
  );
};
