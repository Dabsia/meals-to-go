import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './app.navigator'
import { AuthenticationContext } from '../../services/Authentication/authentication.context'

import { AccountNavigator } from './accountNavigator'

const Navigation = () => {

    const { isAuthenticated } = useContext(AuthenticationContext)

    return (
        <NavigationContainer>
            {
                isAuthenticated ? <AppNavigator /> : <AccountNavigator />
            }
        </NavigationContainer>
    )
}

export default Navigation