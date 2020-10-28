import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "./Card";

import { Typography } from "../styles";

const QuizCard = ({ card, showResponse, onPress }) => {
  return (
    <Card onPress={onPress}>
      <View style={styles.stepInfo}>
        <Text
          style={{ fontWeight: "bold" }}
        >{`${card.currentCard} of ${card.cardNum}`}</Text>
      </View>
      <View style={styles.questionContent}>
        <View style={styles.questionElement}>
          <Text style={styles.questionText}>{card.question}</Text>
        </View>
        {showResponse && (
          <View style={styles.questionElement}>
            <Text style={styles.answerText}>{card.answer}</Text>
          </View>
        )}
      </View>
    </Card>
  );
};

export default QuizCard;

const styles = StyleSheet.create({
  answerText: {
    textAlign: "center",
    ...Typography.descriptionText,
  },
  questionText: {
    textAlign: "center",
    ...Typography.headerText,
  },
  questionContent: {
    flex: 1,
  },
  questionElement: {
    marginVertical: 10,
  },
  stepInfo: {
    width: "100%",
    alignItems: "flex-end",
  },
});
