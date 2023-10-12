import React from 'react'
import styled from 'styled-components'
import CompactRestaurantInfo from '../../components/compactRestaurantInfo/CompactRestaurantInfo'
const MyText = styled.Text`

`

const MapCallout = ({ restaurant }) => {
    return (
        <CompactRestaurantInfo restaurant={restaurant} />
    )
}

export default MapCallout