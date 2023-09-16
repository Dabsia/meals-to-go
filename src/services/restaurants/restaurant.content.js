import { createContext, useState, useMemo, useEffect } from "react";
import { restaurantsRequest, restaurantTransform } from "./restaurants.services";

export const RestaurantContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(null)

    const retrieveRestaurants = () => {
        setIsLoading(true)
        setTimeout(() => {
            restaurantsRequest()
                .then(restaurantTransform)
                .then(restaurants => {

                    setIsLoading(false)
                    setRestaurants(restaurants)
                })
                .catch(err => {
                    setIsLoading(false)
                    setErr(err)
                })
        }, 2000)
    }
    useEffect(() => {
        retrieveRestaurants()

    }, [])
    return <RestaurantContext.Provider value={{
        restaurants: restaurants,
        isLoading,
        err
    }} >{children}</RestaurantContext.Provider>
}