import { View, Text, SafeAreaView } from 'react-native'
import RestaurantCard from '../components/RestaurantCard'
import React from 'react'

const RestaurantDetails = ({ route }) => {
    const { restaurant } = route.params
    return (
        <SafeAreaView>
            <RestaurantCard restaurant={restaurant} />
        </SafeAreaView>

    )
}

export default RestaurantDetails