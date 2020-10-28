import React, { useState } from "react";
import { connect } from "react-redux";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";
import ScreenWithActions from "../components/hoc/ScreenWithAnctionLayout";

import { handleAddCard } from "../store/actions/decks";

const NewDeckQuestion = ({ navigation, route, dispatch }) => {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);

  const onAddCard = () => {
    dispatch(
      handleAddCard({
        answer,
        deckId: route.params.id,
        question,
      })
    );
    navigation.navigate("Detail");
  };
  return (
    <Container>
      <ScreenWithActions
        top={
          <React.Fragment>
            <Input
              placeholder="Question"
              onChangeText={(text) => setQuestion(text)}
              value={question}
            />
            <Input
              placeholder="Answer"
              onChangeText={(text) => setAnswer(text)}
              value={answer}
            />
          </React.Fragment>
        }
        bottom={
          <Button large onPress={onAddCard}>
            Submit
          </Button>
        }
      />
    </Container>
  );
};

export default connect()(NewDeckQuestion);
