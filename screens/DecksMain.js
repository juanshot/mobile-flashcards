import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Decks from "./Decks";
import NewDeck from "./NewDeck";

const Tab = createBottomTabNavigator();

const DecksMain = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Decks" component={Decks} />
      <Tab.Screen name="Add Deck" component={NewDeck} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default DecksMain;
