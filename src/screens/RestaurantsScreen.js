import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper'
import RestaurantCard from '../components/RestaurantCard'
import { styled } from 'styled-components'
import { RestaurantContext } from '../services/restaurants/restaurant.context'
import { ActivityIndicator } from 'react-native-paper'


const SearchContainer = styled.View`
    justifyContent: 'center';
        padding: ${props => props.theme.space[3]};
        color: white;
`

const ActivityIndicatorHolder = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;

`


const RestaurantList = styled(FlatList).attrs({
    content: {
        padding: 16
    }
})``

const RestaurantsScreen = () => {
    const { isLoading, restaurants, err } = useContext(RestaurantContext)

    return (
        <>
            <SearchContainer >
                <Searchbar />
            </SearchContainer>

            {
                isLoading ?
                    <ActivityIndicatorHolder>
                        <ActivityIndicator size='large' color={'#000'} />
                    </ActivityIndicatorHolder>
                    :
                    <>
                        <RestaurantList
                            data={restaurants.results}
                            renderItem={(item) => <RestaurantCard restaurant={item} />}
                            keyExtractor={item => item.name}


                        />
                    </>
            }

        </>



    )
}

export default RestaurantsScreen

