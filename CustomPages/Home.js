import { color } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Legends of Xefi</Text>
      <Text style={styles.sousTitre}>Bienvenue dans les Terres de Xefi</Text>
      <Text>Plongez dans le monde enchanté de Legends of Xefi, un jeu de rôle épique qui vous emmène au cœur d'une saga héroïque où le destin de nombreux royaumes est en jeu. 
        Dans ce monde peuplé de créatures mythiques, de guerriers valeureux et de magiciens aux pouvoirs incommensurables, chaque choix que vous faites peut changer le cours de l'histoire.</Text>
      <Text>Explorez des Paysages Envoûtants </Text>
      <Text>Voyagez à travers des forêts ancestrales,
        des montagnes interdites et des royaumes souterrains oubliés.
        Chaque région de Xefi offre ses propres défis et ses secrets à découvrir. Les graphismes somptueux et les environnements immersifs vous transportent dans un univers où la beauté se mêle au danger.</Text>
        <Text>Rencontrez des Personnages Inoubliables </Text>
        <Text>Xefi est peuplée de personnages complexes dotés de leurs propres histoires et motivations. 
            Forgez des alliances ou rivalisez avec des héros et des antagonistes qui ne sont pas toujours ce qu'ils semblent être. 
            Votre capacité à interagir avec ces personnages déterminera votre capacité à réussir dans les quêtes et à influencer le monde autour de vous.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B5998',
    alignItems: 'center',

  },
  titre: {
    fontSize: 24,
    color: 'white',

  },
  sousTitre: {
    fontSize: 18,
    color: 'white',
    
  }

});
