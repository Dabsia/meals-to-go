import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { Searchbar, Text } from 'react-native-paper'
import RestaurantCard from '../components/RestaurantCard'
import { styled } from 'styled-components'


const SafeArea = styled.SafeAreaView`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`

const SearchContainer = styled.View`
    justifyContent: 'center';
        padding: 16px;
        color: 'white';
`

const RestaurantsScreen = () => {
    return (
        <SafeArea >
            <SearchContainer >
                <Searchbar />
            </SearchContainer>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </SafeArea >
    )
}

export default RestaurantsScreen

