import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import QuizItem from "../components/QuizItem";
import QuizResult from "./QuizResult";

const Stack = createStackNavigator();

const Decks = ({ deck }) => {
  const { cards } = deck;
  return cards.length ? (
    <Stack.Navigator>
      {cards.map((card, index) => (
        <Stack.Screen key={index} name={`Card-${index + 1}`}>
          {(props) => (
            <QuizItem
              {...props}
              card={{ ...card, currentCard: index + 1, cardNum: cards.length }}
              isLastCard={index === cards.length - 1}
            />
          )}
        </Stack.Screen>
      ))}
      <Stack.Screen name="QuizResult" component={QuizResult} />
    </Stack.Navigator>
  ) : (
    <View>
      <Text>No Cards</Text>
    </View>
  );
};

const mapStateToProps = ({ decks }, { route }) => ({
  deck: decks[route.params.id],
});

export default connect(mapStateToProps)(Decks);
