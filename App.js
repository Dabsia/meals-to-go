import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from 'react-native';

export default function App() {

  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }} >

        <View style={styles.redContainer} >
          <Text>Search</Text>
        </View>
        <View style={styles.blueContainer}>
          <Text>List Container</Text>
        </View>

      </SafeAreaView >
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
  },
  redContainer: {
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 16,
    color: 'white'
  },
  blueContainer: {
    backgroundColor: 'blue',
    flex: 1,
    padding: 16,
    color: '#fff'

  }
});
