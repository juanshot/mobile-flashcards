import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import QuizItem from "../components/QuizItem";

const Stack = createStackNavigator();

const Decks = () => {
  return (
    <Stack.Navigator>
      {[1, 2, 3, 4, 5, 6, 7].map((card) => (
        <Stack.Screen name={`Card-${card}`}>
          {(props) => (
            <QuizItem {...props} card={card} isLastCard={card === 7} />
          )}
        </Stack.Screen>
      ))}
    </Stack.Navigator>
  );
};
export default Decks;
