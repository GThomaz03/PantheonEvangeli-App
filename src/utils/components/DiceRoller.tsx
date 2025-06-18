// src/components/DiceRoller.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';


interface DiceRollerProps {
  onRoll?: (result: number) => void;
}

const diceOptions = [4, 6, 8, 10, 12, 20, 100];

const DiceRoller = ({ onRoll }: DiceRollerProps) => {
  const [selectedDice, setSelectedDice] = useState<number>(20);
  const [modifier, setModifier] = useState<number>(0);
  const [rollResult, setRollResult] = useState<number | null>(null);

  const rollDice = () => {
    const roll = Math.floor(Math.random() * selectedDice) + 1;
    const total = roll + modifier;
    setRollResult(total);
    if (onRoll) onRoll(total);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rolador de Dados</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Dado:</Text>
        <Picker
          selectedValue={selectedDice}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedDice(itemValue)}
          mode="dropdown"
        >
          {diceOptions.map((dice) => (
            <Picker.Item key={dice} label={`d${dice}`} value={dice} />
          ))}
        </Picker>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Modificador:</Text>
        <TouchableOpacity onPress={() => setModifier(modifier - 1)} style={styles.modButton}>
          <Text style={styles.modButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.modifier}>{modifier}</Text>
        <TouchableOpacity onPress={() => setModifier(modifier + 1)} style={styles.modButton}>
          <Text style={styles.modButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.rollButton} onPress={rollDice}>
        <Text style={styles.rollButtonText}>Rolar</Text>
      </TouchableOpacity>

      {rollResult !== null && <Text style={styles.resultText}>Resultado: {rollResult}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#eee',
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginRight: 8,
  },
  picker: {
    height: 40,
    width: 100,
  },
  modButton: {
    backgroundColor: '#007bff',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginHorizontal: 10,
  },
  modButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  modifier: {
    fontSize: 16,
    minWidth: 30,
    textAlign: 'center',
  },
  rollButton: {
    backgroundColor: '#28a745',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 40,
    marginTop: 10,
  },
  rollButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  resultText: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: '700',
  },
});

export default DiceRoller;
