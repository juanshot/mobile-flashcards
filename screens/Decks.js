import React, { useEffect } from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import DeckDetail from "./DeckDetail";
import DecksList from "./DecksList";
import NewDeckQuestion from "./NewDeckQuestion";
import Quiz from "./Quiz";
import { handleFetchDecks } from "../store/actions/decks";

const Stack = createStackNavigator();

const Decks = ({ dispatch }) => {
  useEffect(() => {
    dispatch(handleFetchDecks());
    // AsyncStorage.clear();
  }, []);
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={DecksList} />
      <Stack.Screen name="Detail" component={DeckDetail} />
      <Stack.Screen name="NewCard" component={NewDeckQuestion} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
};
export default connect()(Decks);
