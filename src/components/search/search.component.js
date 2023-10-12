import React, { useContext, useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { Searchbar } from 'react-native-paper'
import { LocationContext } from '../../services/location/location.context'

const SearchContainer = styled.View`
    justifyContent: 'center';
        padding: ${props => props.theme.space[3]};
        color: white;
`

const Search = () => {

    const { keyword, search } = useContext(LocationContext)
    const [searchKeyword, setSearchKeyword] = useState(keyword)



    useEffect(() => {
        search(searchKeyword)

    }, [])

    return (
        <SearchContainer >
            <Searchbar
                placeholder='Search for a location'
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword)
                }}
                icon='heart'
                onChangeText={text => {
                    setSearchKeyword(text)
                }}
            />
        </SearchContainer>
    )

}

export default Search
