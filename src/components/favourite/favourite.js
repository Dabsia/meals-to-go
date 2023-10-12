import { useContext } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { styled } from 'styled-components'
import { TouchableOpacity } from 'react-native'
import { FavouritesContext } from '../../services/Favourites/Favourites.context'

const FavouriteBtn = styled(TouchableOpacity)`
    position: absolute;
    top: 20px;
    right: -25px;
    width: 64px;
    z-index: 9
`

const Favourite = ({ restaurant }) => {


    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext)

    const isFavourite = favourites.includes(restaurant)

    // const isFavourite = favourites.includes(r => r.place_id === restaurant.place_id)

    console.log(favourites.length)

    return (

        <FavouriteBtn onPress={() => !isFavourite ? addToFavourites(restaurant) : removeFromFavourites(restaurant)}>
            <AntDesign name={isFavourite ? 'heart' : 'hearto'} size={25} color={isFavourite ? 'red' : 'white'} />
        </FavouriteBtn>
    )
}

export default Favourite


{/* <FavouriteBtn onPress={() => addToFavourites(restaurant)}>
            <AntDesign name={isFavourite ? 'heart' : 'hearto'} size={25} color={isFavourite ? 'red' : 'white'} />
    </FavouriteBtn>*/}