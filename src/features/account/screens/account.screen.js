import { AccountBackground, AuthButton, AccountCover, AccountContainer, Title, AnimationWrapper } from "../components/account.styles"
import LottieView from 'lottie-react-native';

const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover />
            <AnimationWrapper>
                <LottieView
                    key='animation'
                    autoPlay
                    loop
                    resizeMode="cover"
                    source={require('../../../../assets/watermelon.json')}
                />
            </AnimationWrapper>

            <Title>Meals To go</Title>
            <AccountContainer>
                <AuthButton onPress={() => navigation.navigate('Login')} buttonColor="black" mode='contained' icon='lock-open-outline' >Login</AuthButton>
                <AuthButton onPress={() => navigation.navigate('Register')} buttonColor="black" mode='contained' icon='email' >Register</AuthButton>

            </AccountContainer>
        </AccountBackground>
    )
}

export default AccountScreen