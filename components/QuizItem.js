import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../components/Button";
import QuizCard from "./QuizCard";
import Container from "../components/Container";
import ScreenWithActions from "../components/hoc/ScreenWithAnctionLayout";

const QuizItem = ({ card, isLastCard, navigation }) => {
  const [answerDisplayed, setAnswerDisplayed] = useState(false);

  const handleShowAnswer = () => {
    if (!answerDisplayed) {
      setAnswerDisplayed(true);
    }
  };
  const goToNextQuestion = (card, isLastCard) => {
    if (isLastCard) {
      console.log("this is the last card");
      return;
    }
    navigation.navigate(`Card-${card + 1}`);
  };
  return (
    <Container>
      <ScreenWithActions
        top={
          <View style={styles.quizElement}>
            <QuizCard />
          </View>
        }
        bottom={
          <React.Fragment>
            <Button large onPress={() => handleShowAnswer()}>
              Show Answer
            </Button>
            {answerDisplayed && (
              <Button large onPress={() => goToNextQuestion(card, isLastCard)}>
                Next
              </Button>
            )}
          </React.Fragment>
        }
      />
    </Container>
  );
};

export default QuizItem;

const styles = StyleSheet.create({
  quizElement: {
    flexDirection: "row",
  },
  actionButton: {
    marginVertical: 1,
  },
});
