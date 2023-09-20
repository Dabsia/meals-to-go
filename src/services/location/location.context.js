import React, { createContext, useState, useEffect } from 'react'

import { locationRequest, locationTransform } from './location.service'

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {


    const [err, setErr] = useState(null)
    const [keyword, setKeyword] = useState('San francisco')
    const [isLoading, setIsLoading] = useState(false)
    const [location, setLocation] = useState(null)

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
        if (!searchKeyword.length) {
            // don't do anything
            return;
        }
        locationRequest(searchKeyword.toLowerCase())
            .then(locationTransform)
            .then((result) => {
                setIsLoading(false);
                setLocation(result);
                console.log(result);
            })
            .catch((err) => {
                setIsLoading(false);
                setErr(err);
            });
    };

    useEffect(() => {
        onSearch(keyword)
    }, [])


    return (
        <LocationContext.Provider
            value={{
                isLoading,
                err,
                search: onSearch,
                location,
                keyword
            }} >
            {children}
        </LocationContext.Provider>
    )
}