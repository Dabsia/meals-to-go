import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import RestaurantsScreen from '../../screens/RestaurantsScreen'
import RestaurantDetails from '../../screens/RestaurantDetails'

const RestaurantStack = createNativeStackNavigator()

const RestaurantsNavigator = () => {
    return (
        // <RestaurantStack.Navigator screenOptions={{
        //     ...TransitionPresets.ModalPresentationIOS
        // }} >
        <RestaurantStack.Navigator>
            <RestaurantStack.Screen options={{ headerShown: false }}
                name='Home'
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
                name='RestaurantDetail'
                component={RestaurantDetails}
            />

        </RestaurantStack.Navigator>
    )
}

export default RestaurantsNavigator