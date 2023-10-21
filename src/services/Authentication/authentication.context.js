import { useState, createContext } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const API_KEY = 'AIzaSyD4rmNBymsZNzl0DnYcVieomhx0xJVVKRk'

    const onLogin = async (userDetails) => {
        try {

            setIsLoading(true)
            setError('')
            const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userDetails),
            })
            const data = await res.json();
            if (!res.ok) {
                setIsLoading(false)
                setError(data.error.message)
                setIsAuthenticated(false)
            }
            else {
                setIsLoading(false)
                setUser(data)
                console.log(data)
                setIsAuthenticated(true)
                setError('')
            }
        }
        catch {
            console.log('Please check your internet connection')
        }


    }

    return (
        <AuthenticationContext.Provider
            value={{
                user,
                isLoading,
                error,
                onLogin,
                isAuthenticated
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}