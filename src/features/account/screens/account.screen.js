import { AccountBackground, AuthButton, AccountCover, AccountContainer } from "../components/account.styles"
import { Button } from "react-native-paper"

const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthButton onPress={() => navigation.navigate('Login')} buttonColor="black" mode='contained' icon='lock-open-outline' >Login</AuthButton>
                <AuthButton onPress={() => navigation.navigate('Register')} buttonColor="black" mode='contained' icon='lock-open' >Register</AuthButton>

            </AccountContainer>
        </AccountBackground>
    )
}

export default AccountScreen