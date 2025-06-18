import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CharacterProvider } from './src/utils/context/CharacterContext';
import FichaScreen from './src/utils/screens/FichaScreen';

export default function App() {
  return (
    <CharacterProvider>
      <FichaScreen />
    </CharacterProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
