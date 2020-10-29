import React from "react";
import { connect } from "react-redux";
import { Text, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import Container from "../components/Container";
import Button from "../components/Button";
import ScreenWithActions from "../components/hoc/ScreenWithAnctionLayout";
import { Spacing, Typography } from "../styles";
import { clearAndSetNotification } from "../utils/notification";

const QuizResult = ({ navigation, ...results }) => {
  const goTo = (url) => {
    clearAndSetNotification();
    navigation.navigate(url);
  };
  return (
    <Container>
      <ScreenWithActions
        top={
          <View style={styles.resultContainer}>
            <Card>
              <Text style={[styles.textMargin, styles.title]}>
                Results of the Quiz
              </Text>
              <Text style={styles.textMargin}>
                Your Score is :{" "}
                <Text style={styles.resultText}>
                  {results.correctPercentage}%
                </Text>
              </Text>
              <Text style={styles.textMargin}>
                Correct answers:
                <Text style={styles.resultText}> {results.correctAnswers}</Text>
              </Text>
              <Text style={styles.textMargin}>
                Incorrect answers:
                <Text style={styles.resultText}>
                  {" "}
                  {results.incorrectAnswers}
                </Text>
              </Text>
            </Card>
          </View>
        }
        bottom={
          <View>
            <Button large onPress={() => goTo("Card-1")}>
              Restart Quiz
            </Button>
            <Button large onPress={() => goTo("Detail")}>
              Back to Deck
            </Button>
          </View>
        }
      />
    </Container>
  );
};

const mapStateToProps = ({ quiz }) => {
  const cardResults = Object.values(quiz.cards);
  const correctAnswers = cardResults.filter((quiz) => quiz).length;
  return {
    correctPercentage: (correctAnswers * 100) / cardResults.length,
    incorrectAnswers: cardResults.length - correctAnswers,
    correctAnswers,
  };
};

export default connect(mapStateToProps)(QuizResult);

const styles = StyleSheet.create({
  textMargin: {
    marginVertical: Spacing.larger,
  },
  title: {
    ...Typography.headerText,
  },
  resultText: {
    marginLeft: 20,
    ...Typography.link,
  },
  resultContainer: {
    flex: 1,
  },
});
