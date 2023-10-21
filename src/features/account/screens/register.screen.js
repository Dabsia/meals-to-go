import { AccountBackground, AccountCover, AccountContainer2, AuthButton, AuthBackButton, Title } from "../components/account.styles"
import { useState, useContext, useEffect } from "react"
import { AuthenticationContext } from "../../../services/Authentication/authentication.context"
import { TextInput, ActivityIndicator } from "react-native-paper"
import { StyleSheet, Text } from "react-native"

const RegisterScreen = ({ navigation }) => {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')

    const { isLoading, onRegister, error, user } = useContext(AuthenticationContext)


    const userDetails = {
        email, password
    }

    useEffect(() => {
        if (!isLoading && !error && user) {
            navigation.navigate('Login')
        }
    }, [isLoading, error, user])


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
            <Title>Meals To go</Title>
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
                    style={{ marginBottom: 10 }}
                    left={<TextInput.Icon icon="lock" />}
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                />
                {error && <Text style={styles.Text} >{error}</Text>}
                {!isLoading ? <AuthButton onPress={handle} style={{ marginTop: 10, }} buttonColor="#2182BD" mode='contained' icon='email' >Register</AuthButton> :
                    <ActivityIndicator />
                }
            </AccountContainer2>
            <AuthBackButton onPress={() => navigation.goBack()} style={{ marginTop: 10, }} buttonColor="#2182BD" mode='contained' icon='arrow-left' >Back</AuthBackButton>
        </AccountBackground>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    Text: {
        color: 'red',
        marginVertical: 10
    }

})