import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetCharacters from '../CustomComponents/PersoLists';

export default function Personages() {
  return (
    <View style={styles.container}>
        <Text style={styles.titre} color="red">Les Personages</Text>
        <GetCharacters />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B5998',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titre: {
    fontSize: 24,
    color: 'white',
  },
});
