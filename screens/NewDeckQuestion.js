import React from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";
import ScreenWithActions from "../components/hoc/ScreenWithAnctionLayout";

const NewDeckQuestion = () => (
  <Container>
    <ScreenWithActions
      top={
        <React.Fragment>
          <Input placeholder="Question" />
          <Input placeholder="Answer" />
        </React.Fragment>
      }
      bottom={<Button large>Submit</Button>}
    />
  </Container>
);

export default NewDeckQuestion;
