import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import NextButton from "./NextButton";
import ResultButtons from "./ResultButtons";
import QuizCard from "./QuizCard";
import Container from "../components/Container";
import ScreenWithActions from "../components/hoc/ScreenWithAnctionLayout";

const QuizItem = ({ card, isLastCard, navigation }) => {
  const [answerDisplayed, setAnswerDisplayed] = useState(false);
  const [questionMarked, setQuestionMarked] = useState(null);

  const handleQuestionPress = () => {
    setAnswerDisplayed(true);
  };

  const handleMarkQuestion = (markedAs) => {
    console.log("marked as", markedAs);
    setQuestionMarked(markedAs);
  };

  const goToNextQuestion = (card, isLastCard) => {
    if (!isLastCard) {
      navigation.navigate(`Card-${card + 1}`);
      return;
    }
    navigation.navigate("QuizResult");
  };
  return (
    <Container>
      <ScreenWithActions
        top={
          <View style={styles.quizElement}>
            <QuizCard card={card} onPress={handleQuestionPress} />
          </View>
        }
        bottom={
          <React.Fragment>
            {answerDisplayed && (
              <ResultButtons
                isCorrect={questionMarked}
                onPress={handleMarkQuestion}
              />
            )}
            <NextButton
              isLast={isLastCard}
              canContinue={answerDisplayed && questionMarked !== null}
              onPress={() => goToNextQuestion(card, isLastCard)}
            />
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
    height: 300,
  },
  actionButton: {
    marginVertical: 1,
  },
});
