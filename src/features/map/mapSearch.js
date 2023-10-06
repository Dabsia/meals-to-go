import React, { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Searchbar } from 'react-native-paper'
import { LocationContext } from '../../services/location/location.context'

const SearchContainer = styled.View`
    justifyContent: 'center';
        padding: ${props => props.theme.space[3]};
        position: absolute;
        z-index: 9;
        top: 20px;
        width: 100%;
        color: white;
`

const SearchMap = () => {

    const { keyword, search } = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword)

    useEffect(() => {
        setSearchKeyword(keyword)
    }, [keyword])

    return (
        <SearchContainer >
            <Searchbar
                placeholder='Search for a location'
                value={searchKeyword}
                icon='map'
                onSubmitEditing={() => {
                    search(searchKeyword)
                }}
                onChangeText={text => {
                    setSearchKeyword(text)
                }}
            />
        </SearchContainer>
    )

}

export default SearchMap
