import { Card, Text } from 'react-native-paper'
import { SvgXml } from 'react-native-svg'
import styled from 'styled-components'
import star from '../../assets/star'
import open from '../../assets/open'

const Title = styled(Text)`
  color: ${props => props.theme.colors.ui.primary};
  font-size: ${props => props.theme.fontSizes.body} ;
  font-family: ${props => props.theme.fonts.body}
`

const Address = styled(Text)`
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption} ;
`

const Info = styled.View`
  padding: ${props => props.theme.space[1]}
`

const RestaurantCardCover = styled(Card.Cover)`
   padding-top: ${props => props.theme.space[2]};

`

const RestaurantCardItem = styled(Card)`
backgroundColor: '#000';

padding: ${props => props.theme.space[4]};
border-radius: 10px;
margin-bottom:${props => props.theme.space[1]} 
  `

const Ratings = styled.View`
flex-direction: row;
align-self: center
  `

const Section = styled.View`
justify-content: space-between;
flex-direction: row;
padding: ${props => props.theme.space[2]} 0;
`
const SectionEnd = styled.View`
align-self: center
  `


const RestaurantCard = ({ restaurant }) => {
  const photos = restaurant.item.photos

  // console.log(photos[0])


  const {
    name = 'Some Restaurant',
    icon = '',
    // photos = ['https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'],
    address = 'Some random address',
    isOpenNow = true,
    rating = 4,
    isClosedTemp,
    placeId

  } = restaurant;



  const ratingsArray = Array.from(new Array(Math.floor(restaurant.item.rating)))

  return (

    <RestaurantCardItem elevation={3}  >
      <RestaurantCardCover key={name} source={{ uri: 'https://picsum.photos/700' }} />
      <Info>
        <Title>{restaurant.item.name}</Title>
        <Section>
          <Ratings>
            {
              ratingsArray.map((_, id) => (
                < SvgXml key={`star-${placeId}-${id}`} xml={star} height={20} width={20} />
              ))
            }
          </Ratings>
          <SectionEnd>
            {isOpenNow && < SvgXml xml={open} height={20} width={20} />}
          </SectionEnd>

        </Section>
        <Address>{restaurant.item.vicinity}</Address>
      </Info>



    </RestaurantCardItem>

  )
}

export default RestaurantCard

