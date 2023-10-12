import React from 'react'
import styled from 'styled-components'
import { Text } from 'react-native'
import WebView from 'react-native-webview'
import { Platform } from 'react-native'

const CompactImage = styled.Image`
    border-radius: 20px;
    width: 120px;
    height: 100px
`

const Item = styled.View`
    padding: 10px;
    max-width: 120px; 
    align-items: center
`

const CompactWebview = styled(WebView)`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`

const isAndroid = Platform.OS === 'android'

const image = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'

const CompactRestaurantInfo = ({ restaurant }) => {
    const Image = isAndroid ? CompactWebview : CompactImage
    return (
        <Item>
            <Image source={{ uri: image }} style={{ height: 100, resizeMode: 'stretch', margin: 5 }} />
            <Text center variant='caption' numberOfLines={3} >{restaurant.name}</Text>

        </Item>
    )
}

export default CompactRestaurantInfo