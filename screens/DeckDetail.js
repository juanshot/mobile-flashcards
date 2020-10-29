import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import Container from "../components/Container";
import Button from "../components/Button";
import Text from "../components/Text";

import { Typography } from "../styles";
import { createQuiz } from "../store/actions/quiz";

const DeckDetail = ({ dispatch, navigation, decks, route }) => {
  const deck = decks[route.params.id];

  const handleOpenQuiz = () => {
    dispatch(
      createQuiz({
        numberOfCards: deck.cards.length,
        cards: {},
      })
    );
    goToRoute("Quiz");
  };
  const goToRoute = (routeName) => {
    navigation.navigate({ name: routeName, params: { id: deck.id } });
  };
  return (
    <Container>
      <View style={styles.deckDetail}>
        <Text style={styles.title}>{deck.name} </Text>
        <Text style={styles.description}>{deck.cards.length} cards</Text>
      </View>
      <View style={styles.deckActions}>
        <Button outline onPress={() => goToRoute("NewCard")}>
          Add Card
        </Button>
        <Button onPress={handleOpenQuiz}>Start Quiz</Button>
      </View>
    </Container>
  );
};

const mapStateToProps = ({ decks }) => ({
  decks,
});

export default connect(mapStateToProps)(DeckDetail);

const styles = StyleSheet.create({
  deckDetail: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  deckActions: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    ...Typography.headerText,
  },
  description: {
    marginVertical: 5,
    ...Typography.descriptionText,
  },
});
