// src/components/StatusBar.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatusBarProps {
  label: string;
  value: number;
  maxValue: number;
  color: string;
}

const StatusBar = ({ label, value, maxValue, color }: StatusBarProps) => {
  const percentage = (value / maxValue) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}: {value} / {maxValue}</Text>
      <View style={styles.barContainer}>
        <View style={[styles.bar, { width: `${percentage}%`, backgroundColor: color }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  barContainer: {
    width: '100%',
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 4,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    borderRadius: 4,
  },
});

export default StatusBar;