import React from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import Container from "../components/Container";
import Button from "../components/Button";
import Text from "../components/Text";

import { Typography } from "../styles";

const DeckDetail = ({ navigation, deck }) => {
  const goToRoute = (routeName) => {
    navigation.navigate({ name: routeName, params: { id: deck.id } });
  };
  const onDelete = () => {
    console.log("delete");
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
        <Button onPress={() => goToRoute("Quiz")}>Start Quiz</Button>
        <Button link onPress={onDelete}>
          Delete Deck
        </Button>
      </View>
    </Container>
  );
};

const mapStateToProps = ({ decks }, { route }) => ({
  deck: decks[route.params.id],
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
