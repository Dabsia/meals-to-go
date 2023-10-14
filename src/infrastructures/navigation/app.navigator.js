import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '../../screens/Map';
import SettingsScreen from '../../screens/Settings';
import RestaurantsNavigator from './restaurants.navigator';


const Tab = createBottomTabNavigator();

// const TAB_ICON = {
//   Restaurants: "md-restaurant",
//   Map: "md-map",
//   Settings: "md-settings",
// };

// const createScreenOptions = ({ route }) => {
//   const iconName = TAB_ICON[route.name];
//   return {
//     tabBarIcon: ({ size, color }) => (
//       <Ionicons name={iconName} size={size} color={color} />
//     ),
//     tabBarActiveTintColor: "tomato",
//     tabBarInactiveTintColor: "gray",
//     // tabBarStyle: { height: 60 }
//   };
// };

const AppNavigator = () => (

  <Tab.Navigator
    screenOptions={({ route, }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Restaurants') {
          iconName = 'md-restaurant'
        }
        else if (route.name === 'Map') {
          iconName = "md-map"
        }
        else if (route.name === 'Settings') {
          iconName = "md-settings"
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
      tabBarStyle: { height: 60 }

    })}
  >
    <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>

);

export default AppNavigator