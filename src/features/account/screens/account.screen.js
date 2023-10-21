import { AccountBackground, AuthButton, AccountCover, AccountContainer, Title } from "../components/account.styles"


const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover />
            <Title>Meals To go</Title>
            <AccountContainer>
                <AuthButton onPress={() => navigation.navigate('Login')} buttonColor="black" mode='contained' icon='lock-open-outline' >Login</AuthButton>
                <AuthButton onPress={() => navigation.navigate('Register')} buttonColor="black" mode='contained' icon='lock-open' >Register</AuthButton>

            </AccountContainer>
        </AccountBackground>
    )
}

export default AccountScreen