import React from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import RestaurantCard from '../components/RestaurantCard'
import { styled } from 'styled-components'


const SafeArea = styled.SafeAreaView`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`

const SearchContainer = styled.View`
    justifyContent: 'center';
        padding: ${props => props.theme.space[3]};
        color: white;
`

const RestaurantCardContainer = styled.View`
    padding: ${props => props.theme.space[2]};
`

const RestaurantsScreen = () => {
    return (
        <SafeArea >
            <SearchContainer >
                <Searchbar />
            </SearchContainer>
            <RestaurantCardContainer>
                <RestaurantCard />
            </RestaurantCardContainer>


        </SafeArea >
    )
}

export default RestaurantsScreen

