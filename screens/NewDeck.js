import React, { useState } from "react";
import { Alert } from "react-native";
import { connect } from "react-redux";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";
import Text from "../components/Text";
import ScreenWithActions from "../components/hoc/ScreenWithAnctionLayout";
import { handleAddDeck } from "../store/actions/decks";
import { generateId } from "../utils/helpers";

const NewDeckQuestion = ({ dispatch, navigation }) => {
  const [deckNameInput, setDeckNameInput] = useState(null);
  const onCreateDeck = () => {
    const id = generateId();
    const newDeck = {
      [id]: {
        id,
        name: deckNameInput,
        cards: [],
      },
    };

    dispatch(handleAddDeck(newDeck));
    setDeckNameInput(null);
    navigation.navigate("Decks");
  };
  return (
    <Container>
      <ScreenWithActions
        top={
          <React.Fragment>
            <Text>What is the title for your new deck ?</Text>
            <Input
              placeholder="Title"
              onChangeText={(text) => setDeckNameInput(text)}
              value={deckNameInput}
            />
          </React.Fragment>
        }
        bottom={
          <Button disabled={!deckNameInput} large onPress={onCreateDeck}>
            Create Deck
          </Button>
        }
      />
    </Container>
  );
};

export default connect()(NewDeckQuestion);
