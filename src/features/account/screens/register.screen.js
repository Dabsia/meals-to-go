import { AccountBackground, AccountCover, AccountContainer2, AuthButton } from "../components/account.styles"
import { useState } from "react"
import { TextInput, ActivityIndicator } from "react-native-paper"
import { StyleSheet, Text } from "react-native"

const RegisterScreen = ({ navigation }) => {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')


    const userDetails = {
        email, password
    }

    const API_KEY = 'AIzaSyD4rmNBymsZNzl0DnYcVieomhx0xJVVKRk'



    const onRegister = async (userDetails) => {
        try {
            console.log(userDetails)
            setIsLoading(true)
            setError('')
            const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
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
                console.log(data.error.message)
            }
            else {
                setIsLoading(false)
                navigation.navigate('Login')
                setError('')
            }
        }
        catch {
            console.log('Please check your internet connection')
            setIsLoading(false)
        }


    }

    const handle = () => {
        if (!password || !email || !confirmPassword) {
            alert('Inputs cannot be empty')
        }
        else if (password !== confirmPassword) {
            alert('Password doesnt match')
        }
        else {
            onRegister(userDetails)
        }
    }

    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer2>
                <TextInput
                    style={{ marginBottom: 10 }}
                    label="E-mail"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    left={<TextInput.Icon icon="email" />}
                />
                <TextInput
                    style={{ marginBottom: 10 }}
                    label="Password"
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    left={<TextInput.Icon icon="lock" />}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <TextInput
                    label="Confirm Password"
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    left={<TextInput.Icon icon="lock" />}
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                />
                <Text style={styles.Text} >{error}</Text>
                {!isLoading ? <AuthButton onPress={handle} style={{ height: 60, marginTop: 10, }} buttonColor="black" mode='contained' icon='lock-open-outline' >Register</AuthButton> :
                    <ActivityIndicator />
                }
            </AccountContainer2>
            <AuthButton onPress={() => navigation.goBack()} style={{ height: 60, marginTop: 10, }} buttonColor="black" mode='contained' icon='lock-open-outline' >Back</AuthButton>
        </AccountBackground>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    Text: { color: 'red', marginVertical: 10 }

})