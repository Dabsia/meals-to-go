import { StatusBar } from 'react-native'
import { styled } from 'styled-components'
import { colors } from '../../infrastructures/theme/colors'

export const SafeArea = styled.SafeAreaView`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
    background-color: ${colors.ui.primary}

`