import React from 'react'
import { ScrollView, StatusBar, FlatList } from 'react-native'
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


const RestaurantList = styled(FlatList).attrs({
    content: {
        padding: 16
    }
})``

const RestaurantsScreen = () => {
    return (
        <SafeArea >
            <SearchContainer >
                <Searchbar />
            </SearchContainer>

            <RestaurantList
                data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }, { name: 6 }, { name: 7 }, { name: 8 }]}
                renderItem={() => <RestaurantCard />}
                keyExtractor={item => item.name}


            />




        </SafeArea >
    )
}

export default RestaurantsScreen

