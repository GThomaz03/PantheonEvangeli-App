// src/components/AttributeBlock.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface AttributeBlockProps {
  name: string;
  value: number;
  onRoll?: (result: number) => void; // callback para resultado da rolagem
}

const AttributeBlock = ({ name, value, onRoll }: AttributeBlockProps) => {
  const [lastRoll, setLastRoll] = useState<number | null>(null);

  // Simula rolar 1d20 + valor do atributo
  const handleRoll = () => {
    const diceRoll = Math.floor(Math.random() * 20) + 1; // 1 a 20
    const total = diceRoll + value;
    setLastRoll(total);
    if (onRoll) onRoll(total);
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRoll}>
        <Text style={styles.buttonText}>Rolar</Text>
      </TouchableOpacity>
      {lastRoll !== null && (
        <Text style={styles.result}>Resultado: {lastRoll}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
  value: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  result: {
    marginTop: 6,
    fontStyle: 'italic',
  },
});

export default AttributeBlock;
