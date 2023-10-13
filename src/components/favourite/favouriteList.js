import { View } from 'react-native'
import React from 'react'
import CompactRestaurantInfo from '../compactRestaurantInfo/CompactRestaurantInfo'
import { styled } from 'styled-components'
import { ScrollView } from 'react-native'

const FavouriteList = ({ favourites }) => {


    const FavouritesContainer = styled.View`
        padding: 10px 20px
    `


    return (
        <FavouritesContainer>
            <ScrollView horizontal showHorizontalScrollIndicator={false} >
                {
                    favourites.map((restaurant, id) => {
                        // const key = restaurant?.name.split('')
                        return (
                            <View key={id} style={{ marginRight: 10 }} >
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </View>
                        )
                    })
                }
            </ScrollView>
        </FavouritesContainer>
    )
}

export default FavouriteList