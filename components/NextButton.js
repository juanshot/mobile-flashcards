import React from "react";
import Button from "./Button";

const QuizButton = ({ isLast, canContinue, onPress }) => {
  return (
    <Button disabled={!canContinue} large onPress={onPress}>
      {isLast ? "Results" : "Next"}
    </Button>
  );
};

export default QuizButton;
