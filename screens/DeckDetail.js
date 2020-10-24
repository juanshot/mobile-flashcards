import React from "react";
import { View, StyleSheet } from "react-native";
import Container from "../components/Container";
import Button from "../components/Button";
import Text from "../components/Text";

const DeckDetail = ({ navigation, route }) => {
  const { id } = route.params;

  const goToRoute = (routeName) => {
    navigation.navigate({ name: routeName });
  };
  const onDelete = () => {
    console.log("delete");
  };
  return (
    <Container>
      <View style={styles.deckDetail}>
        <Text>Deck1 -- {id}</Text>
        <Text>3 cards</Text>
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

export default DeckDetail;

const styles = StyleSheet.create({
  deckDetail: {
    flex: 3,
    justifyContent: "flex-start",
  },
  deckActions: {
    flex: 1,
    justifyContent: "space-between",
  },
});
