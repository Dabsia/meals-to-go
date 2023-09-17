import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import RestaurantsScreen from './src/screens/RestaurantsScreen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructures/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from './src/components/utilities/safe-area.component';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsContextProvider } from './src/services/restaurants/restaurant.context';
import { LocationContextProvider } from './src/services/location/location.context';

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
        <Text>Maps</Text>
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
    <SafeArea>
      <ThemeProvider theme={theme} >
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Restaurants') {
                      iconName = 'md-restaurant';
                    }
                    else if (route.name === 'Settings') {
                      iconName = 'md-settings'
                    }
                    else if (route.name === 'Map') {
                      iconName = 'md-map'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                  },

                })}
                tabBarOptions={{
                  activeTintColor: 'tomato',
                  inActiveTintColor: 'gray'
                }}

              >
                <Tab.Screen options={{ headerShown: false }} name='Restaurants' component={RestaurantsScreen} />
                <Tab.Screen options={{ headerShown: false }} name='Map' component={Map} />
                <Tab.Screen options={{ headerShown: false }} name='Settings' component={Settings} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </SafeArea>
  );
}

