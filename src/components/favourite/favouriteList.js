import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { FavouritesContext } from '../../services/Favourites/Favourites.context'
import CompactRestaurantInfo from '../compactRestaurantInfo/CompactRestaurantInfo'

const FavouriteList = ({ restaurant }) => {
    const { favourites } = useContext(FavouritesContext)
    console.log(favourites.length)
    return (
        <View>
            <CompactRestaurantInfo restaurant={restaurant} />
        </View>
    )
}

export default FavouriteList