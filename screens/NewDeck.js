import React from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";
import Text from "../components/Text";
import ScreenWithActions from "../components/hoc/ScreenWithAnctionLayout";

const NewDeckQuestion = () => (
  <Container>
    <ScreenWithActions
      top={
        <React.Fragment>
          <Text>What is the title for your new deck ?</Text>
          <Input placeholder="Title" />
        </React.Fragment>
      }
      bottom={<Button large>Create Deck</Button>}
    />
  </Container>
);

export default NewDeckQuestion;
