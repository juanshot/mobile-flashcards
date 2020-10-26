import React from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";
import ScreenWithActions from "../components/hoc/ScreenWithAnctionLayout";

const NewDeckQuestion = ({ route }) => {
  const onAddCard = () => {
    console.log("route", route.params);
  };
  return (
    <Container>
      <ScreenWithActions
        top={
          <React.Fragment>
            <Input placeholder="Question" />
            <Input placeholder="Answer" />
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

export default NewDeckQuestion;
