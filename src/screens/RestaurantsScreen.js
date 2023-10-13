import React, { useContext, useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import RestaurantCard from '../components/RestaurantCard'
import { styled } from 'styled-components'
import { RestaurantContext } from '../services/restaurants/restaurant.context'
import { ActivityIndicator } from 'react-native-paper'
import Search from '../components/search/search.component'
import FavouriteList from '../components/favourite/favouriteList'
import { FavouritesContext } from '../services/Favourites/Favourites.context'

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

const RestaurantsScreen = ({ navigation }) => {
    const { isLoading, restaurants } = useContext(RestaurantContext)
    const { favourites } = useContext(FavouritesContext)

    const [isToggled, setIsToggled] = useState(false)

    return (
        <>
            <Search onFavouritesToggle={() => setIsToggled(!isToggled)} isFavouritesToggled={isToggled} />
            {
                isLoading ?
                    <ActivityIndicatorHolder>
                        <ActivityIndicator size='large' color={'#000'} />
                    </ActivityIndicatorHolder>
                    :
                    <>
                        {isToggled && <FavouriteList favourites={favourites} />}
                        <RestaurantList
                            data={restaurants.results}
                            renderItem={(item) =>
                                <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })} >
                                    <RestaurantCard restaurant={item} />
                                </TouchableOpacity>
                            }
                            keyExtractor={item => item.name}
                        />
                    </>
            }
        </>
    )
}

export default RestaurantsScreen

