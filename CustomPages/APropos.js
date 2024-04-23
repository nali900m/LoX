import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function APropos() {
  return (
    <View style={styles.container}>
      <Text>AP</Text>
      <StatusBar style="auto" />
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
});
