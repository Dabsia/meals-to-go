import { AccountBackground, AuthButton, AccountCover, AccountContainer } from "../components/account.styles"
import { Button } from "react-native-paper"

const AccountScreen = () => {
    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <Button onPress={console.log('I was clicked')} buttonColor="black" mode='contained' icon='lock-open-outline' >Login</Button>

            </AccountContainer>
        </AccountBackground>
    )
}

export default AccountScreen