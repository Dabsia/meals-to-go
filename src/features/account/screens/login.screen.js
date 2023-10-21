import { AccountBackground, AuthButton, AccountContainer2, AccountCover } from "../components/account.styles"
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
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <Text style={styles.Text} >{err}</Text>
                {!isLoading ? <AuthButton onPress={() => onLogin(userDetails)} style={{ height: 60, marginTop: 10, }} buttonColor="black" mode='contained' icon='lock-open-outline' >Login</AuthButton> :
                    <ActivityIndicator />
                }
            </AccountContainer2>
            <AuthButton onPress={() => navigation.goBack()} style={{ height: 60, marginTop: 10, }} buttonColor="black" mode='contained' icon='lock-open-outline' >Back</AuthButton>
        </AccountBackground>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    Text: { color: 'red', marginVertical: 10 }

})