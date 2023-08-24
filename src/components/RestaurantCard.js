import { Card, Text } from 'react-native-paper'
import { View } from 'react-native'
import styled from 'styled-components'

const Title = styled(Text)`
  color: red;
  padding: 10px

`

const RestaurantCardCover = styled(Card.Cover)`
  
   backgroundColor: '#fff';
   padding: 20px 10px;
   
`

const RestaurantCardItem = styled(Card)`
  backgroundColor: '#fff';
  padding: 20px;
  border-radius: 10px
`



const RestaurantCard = ({ restaurant = {} }) => {

  const {
    name = 'Some Restaurant',
    icon = '',
    photos = ['https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'],
    address = 'Some random address',
    isOpenNow = true,
    rating = 4,
    isClosedTemp

  } = restaurant;

  const alertName = (e) => {
    alert(e)
  }

  return (

    <RestaurantCardItem onPressOut={() => alertName(address)} elevation={5}  >
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCardItem>

  )
}

export default RestaurantCard

