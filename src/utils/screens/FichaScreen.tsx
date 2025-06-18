// src/screens/FichaScreen.tsx
import React, { useContext } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { CharacterContext } from '../context/CharacterContext';
import DiceRoller from '../components/DiceRoller';
import StatusBar from '../components/StatusBar';
import AttributeBlock from '../components/AttributeBlock';

const FichaScreen = () => {
  const { character } = useContext(CharacterContext);

  if (!character) {
    return (
      <View style={styles.container}>
        <Text style={styles.warning}>Nenhum personagem carregado.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>{character.nome}</Text>

      <View style={styles.section}>
        <StatusBar label="Vida" value={character.vida} maxValue={character.vidaMax} color="#ff4d4d" />
        <StatusBar label="Sanidade" value={character.sanidade} maxValue={character.sanidadeMax} color="#4d79ff" />
        <StatusBar label="Foco" value={character.foco} maxValue={character.focoMax} color="#4dff88" />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Atributos</Text>
        <View style={styles.attributesContainer}>
          {Object.entries(character.atributos).map(([atributo, valor]) => (
            <AttributeBlock key={atributo} name={atributo} value={valor} />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Rolagem de Dados</Text>
        <DiceRoller />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#dfdfdf',
    flexGrow: 1,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#323232',
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: '#4b4b4b',
    marginBottom: 10,
  },
  attributesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  warning: {
    fontSize: 18,
    color: '#f77',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default FichaScreen;
