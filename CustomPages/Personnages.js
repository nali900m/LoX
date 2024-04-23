import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetCharacters from '../CustomComponents/PersoLists';
import GetChar from '../CustomComponents/PersoDetails';

export default function Personages() {
    const test = 1;
    if (test) {
        return (
            <View style={styles.container}>
                <Text style={styles.titre}>Les Personages</Text>
                <GetCharacters/>
            </View>
          );
    }
    else {
        return (
            <View style={styles.container}>
                <GetChar/>
            </View>
          );
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B5998',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  titre: {
    fontSize: 24,
    color: 'white',
  },
});
