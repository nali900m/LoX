import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UnPerso from '../CustomComponents/PersoDetails';

export default function APropos() {
    return (
      <>
      <View style={styles.container}>
            <Text style={styles.titre}>À propos{'\n'}</Text>
            <Text style={styles.sousTitre}>
                Mystic Forge Studios{'\n'}
            </Text>
            <Text style={styles.baseText}>
                Situés au cœur de l'innovation et de la créativité, nous sommes une équipe passionnée de développeurs, de designers et de conteurs dédiée à la création d'expériences vidéoludiques immersives et captivantes.{'\n'}
            </Text>
            <Text style={styles.sousTitre}>
                Notre Mission{'\n'}
            </Text>
            <Text style={styles.baseText}>
                Chez Mystic Forge Studios, notre mission est de transcender les frontières traditionnelles du jeu vidéo pour offrir des aventures uniques et mémorables.
                Nous croyons en la puissance du jeu pour rassembler les gens, raconter des histoires profondes et offrir des expériences enrichissantes qui restent avec les joueurs longtemps après qu'ils aient mis de côté leur console.
            </Text>
            
      </View>
    
      </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3B5998',
  
    },
    titre: {
      fontSize: 24,
      color: 'white',
      alignItems: 'center',
    
    },
    sousTitre: {
      fontSize: 18,
      color: 'white',
    },
    baseText: {
        fontSize: 14,
        color: 'white',
    }
  
  });
  