import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import RestaurantCard from '../components/RestaurantCard'
import { styled } from 'styled-components'
import { RestaurantContext } from '../services/restaurants/restaurant.context'
import { ActivityIndicator } from 'react-native-paper'
import Search from '../components/search/search.component'




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
            <Search />

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

