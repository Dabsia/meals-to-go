import { AccountBackground, AuthButton, AccountContainer2, AccountCover, AuthBackButton, Title } from "../components/account.styles"
import { TextInput, ActivityIndicator, Text } from 'react-native-paper';
import { useState, useContext, useEffect } from "react";
import { AuthenticationContext } from "../../../services/Authentication/authentication.context";
import { StyleSheet } from "react-native";


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [err, setErr] = useState('')

    const { onLogin, isLoading, error } = useContext(AuthenticationContext)

    useEffect(() => {
        setErr(error)
    }, [setErr, error])





    const userDetails = {
        email, password
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
                    label="Password"
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    left={<TextInput.Icon icon="lock" />}
                    style={{ marginBottom: 10 }}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                {error && <Text style={styles.Text} >{err}</Text>}
                {!isLoading ? <AuthButton onPress={() => onLogin(userDetails)} style={{ marginTop: 10, }} buttonColor="#2182BD" mode='contained' icon='email' >Login</AuthButton> :
                    <ActivityIndicator />
                }
            </AccountContainer2>
            <AuthBackButton onPress={() => navigation.goBack()} style={{ marginTop: 10, }} buttonColor="#2182BD" mode='contained' icon='arrow-left' >Back</AuthBackButton>
        </AccountBackground>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    Text: { color: 'red', marginVertical: 10 }

})