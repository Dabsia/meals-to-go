import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructures/theme';
import { SafeArea } from './src/components/utilities/safe-area.component';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import Navigation from './src/infrastructures/navigation/index'
import { RestaurantsContextProvider } from './src/services/restaurants/restaurant.context';
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouritesContextProvider } from './src/services/Favourites/Favourites.context';
import { AuthenticationContextProvider } from './src/services/Authentication/authentication.context';


export default function App() {


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
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </SafeArea>
  );
}

