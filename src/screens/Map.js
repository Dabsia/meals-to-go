import { View, Text, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { styled } from 'styled-components'
import SearchMap from '../features/map/mapSearch'
import { LocationContext } from '../services/location/location.context'
import { RestaurantContext } from '../services/restaurants/restaurant.context'


const Map = styled(MapView)`
  height: 100%;
  width: 100%

`

const MapScreen = () => {

  const { location } = useContext(LocationContext)

  const { restaurants = [] } = useContext(RestaurantContext)


  const [latDelta, setLatDelta] = useState(0)

  console.log(restaurants.results)

  const { viewport, lat, lng } = location



  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    const delta = northeastLat - southwestLat
    setLatDelta(delta)
  }, [location, viewport])
  return (
    <>
      <SearchMap />
      <Map
        region={{
          latitude: lat, longitude: lng,
          latitudeDelta: latDelta, longitudeDelta: 0.02
        }}
      >
        {restaurants.results && restaurants.results.map(restaurant => {

          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}

            />
          )
        })
        }

      </Map>
    </>

  )
}
export default MapScreen


