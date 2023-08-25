import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import RestaurantsScreen from './src/screens/RestaurantsScreen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructures/theme';

export default function App() {

  return (
    <>
      <ThemeProvider theme={theme} >
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

