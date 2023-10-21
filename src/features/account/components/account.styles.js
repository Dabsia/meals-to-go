import styled from 'styled-components'

import { colors } from '../../../infrastructures/theme/colors'
import { Button, TextInput } from 'react-native-paper'

export const AccountBackground = styled.ImageBackground.attrs({
    source: require('../../assets/background.jpg')
})`
    flex: 1;
    align-items: center;
    justify-content: center
`

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255, 0.3)
`

export const AccountContainer = styled.View`
    background-color: rgba(255,255,255, 0.7);
    padding: ${props => props.theme.space[4]};
    margin: ${props => props.theme.space[2]}

`
export const AccountContainer2 = styled.View`
    width: 80%;
    height: fit-content;
    padding: ${props => props.theme.space[3]};
    background-color: rgba(255,255,255, 0.9);
    `

export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary

})`
  border-radius: 10px;
  align-self: center;
  margin-bottom: 10px
  
`
