import React from "react";
import Button from "./Button";
import { isNull } from "../utils/validations";

const ResultButtons = ({ onPress, isCorrect }) => (
  <React.Fragment>
    <Button
      outline={isNull(isCorrect) || isCorrect === false}
      onPress={() => onPress(true)}
      large
    >
      Correct
    </Button>
    <Button
      outline={isNull(isCorrect) || isCorrect === true}
      onPress={() => onPress(false)}
      large
    >
      Incorrect
    </Button>
  </React.Fragment>
);

export default ResultButtons;
