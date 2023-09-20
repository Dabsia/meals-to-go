import { createContext, useState, useMemo, useEffect, useContext } from "react";
import { restaurantsRequest, restaurantTransform } from "./restaurants.services";
import { LocationContext } from "../location/location.context";

export const RestaurantContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(null)
    const { location } = useContext(LocationContext)



    const retrieveRestaurants = (loc) => {
        setIsLoading(true)
        setRestaurants([])
        setTimeout(() => {
            restaurantsRequest(loc)
                .then(restaurantTransform)
                .then((results) => {
                    setIsLoading(false);
                    setRestaurants(results);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setErr(err);
                });
        }, 2000);
    };
    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationString);
        }
    }, [location]);
    return <RestaurantContext.Provider value={{
        restaurants,
        isLoading,
        err
    }} >{children}</RestaurantContext.Provider>
}