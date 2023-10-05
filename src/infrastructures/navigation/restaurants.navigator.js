import React from 'react'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import RestaurantsScreen from '../../screens/RestaurantsScreen'
import RestaurantDetails from '../../screens/RestaurantDetails'

const RestaurantStack = createStackNavigator()

const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{
            ...TransitionPresets.ModalPresentationIOS
        }} >
            <RestaurantStack.Screen
                name='Restaurants'
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