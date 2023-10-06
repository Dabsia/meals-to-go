import { View, Text, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import MapView from 'react-native-maps'
import { styled } from 'styled-components'
import SearchMap from '../features/map/mapSearch'


const Map = styled(MapView)`
  height: 100%;
  width: 100%
`

const MapScreen = () => {
  return (
    <>
      <SearchMap />
      <Map />
    </>

  )
}
export default MapScreen


