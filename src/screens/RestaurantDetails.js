import { SafeAreaView, ScrollView } from 'react-native'
import RestaurantCard from '../components/RestaurantCard'
import React, { useState } from 'react'
import { List } from 'react-native-paper'

const RestaurantDetails = ({ route }) => {

    const [breakfastExpanded, setBreakfastExpanded] = useState(false)
    const [lunchExpanded, setLunchExpanded] = useState(false)
    const [dinnerExpanded, setDinnerExpanded] = useState(false)
    const [drinksExpanded, setDrinksExpanded] = useState(false)

    const { restaurant } = route.params
    return (
        <SafeAreaView>
            <ScrollView>
                <RestaurantCard restaurant={restaurant} />
                <List.Accordion
                    title='Breakfast'
                    left={props => <List.Icon {...props} icon='bread-slice' />}
                    expanded={breakfastExpanded}
                    onPress={() => setBreakfastExpanded(!breakfastExpanded)}
                >
                    <List.Item title='Eggs Benedict' />
                    <List.Item title='Classic Breakfast' />
                </List.Accordion>
                <List.Accordion
                    title='Lunch'
                    left={props => <List.Icon {...props} icon='hamburger' />}
                    expanded={lunchExpanded}
                    onPress={() => setLunchExpanded(!lunchExpanded)}
                >
                    <List.Item title='Burger with Fries' />
                    <List.Item title='Steak Sandwish' />
                    <List.Item title='Mushroom Soup'></List.Item>
                </List.Accordion>
                <List.Accordion
                    title='Dinner'
                    left={props => <List.Icon {...props} icon='food-variant' />}
                    expanded={dinnerExpanded}
                    onPress={() => setDinnerExpanded(!dinnerExpanded)}
                >
                    <List.Item title='Spaghetti Bolognese' />
                    <List.Item title='Veal Cutlet with chicken mushroom soup' />
                    <List.Item title='Steak Frites'></List.Item>
                </List.Accordion>
                <List.Accordion
                    title='Drinks'
                    left={props => <List.Icon {...props} icon='cup' />}
                    expanded={drinksExpanded}
                    onPress={() => setDrinksExpanded(!drinksExpanded)}
                >
                    <List.Item title='Coffee' />
                    <List.Item title='Tea' />
                    <List.Item title='Coke' />
                    <List.Item title='Fanta' />
                </List.Accordion>
            </ScrollView>
        </SafeAreaView>

    )
}

export default RestaurantDetails