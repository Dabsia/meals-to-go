import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import RestaurantsScreen from './src/screens/RestaurantsScreen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructures/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import { View, Text } from 'react-native';


export default function App() {

  const Tab = createBottomTabNavigator()

  const Settings = () => {
    return (
      <View >
        <Text>Settings</Text>
      </View>
    )
  }
  const Map = () => {
    return (
      <View >
        <Text>Map</Text>
      </View>
    )
  }


  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })

  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme} >
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
            <Tab.Screen name='Map' component={Map} />
            <Tab.Screen name='Settings' component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

