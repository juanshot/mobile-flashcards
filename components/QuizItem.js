import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { View, StyleSheet } from "react-native";
import NextButton from "./NextButton";
import ResultButtons from "./ResultButtons";
import QuizCard from "./QuizCard";
import Container from "../components/Container";
import ScreenWithActions from "../components/hoc/ScreenWithAnctionLayout";

import { addQuizAnswer } from "../store/actions/quiz";

const QuizItem = ({ card, isLastCard, navigation, dispatch }) => {
  const [answerDisplayed, setAnswerDisplayed] = useState(false);
  const [questionMarked, setQuestionMarked] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setAnswerDisplayed(false);
      setQuestionMarked(null);
    });

    return unsubscribe;
  }, [navigation]);

  const handleQuestionPress = () => {
    setAnswerDisplayed(true);
  };

  const handleMarkQuestion = (markedAs) => {
    dispatch(
      addQuizAnswer({
        [card.currentCard]: markedAs,
      })
    );
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
            <QuizCard
              card={card}
              onPress={handleQuestionPress}
              showResponse={answerDisplayed}
            />
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
              onPress={() => goToNextQuestion(card.currentCard, isLastCard)}
            />
          </React.Fragment>
        }
      />
    </Container>
  );
};

export default connect()(QuizItem);

const styles = StyleSheet.create({
  quizElement: {
    flexDirection: "row",
    height: 300,
  },
  actionButton: {
    marginVertical: 1,
  },
});
