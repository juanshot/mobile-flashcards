import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "./Card";

const QuizCard = ({ card, showResponse, onPress }) => {
  return (
    <Card onPress={onPress}>
      <View style={styles.stepInfo}>
        <Text style={{ fontWeight: "bold" }}>{`${card} of 7`}</Text>
      </View>
      <View style={styles.questionContent}>
        {showResponse ? (
          <View style={styles.questionElement}>
            <Text>Response</Text>
          </View>
        ) : (
          <React.Fragment>
            <View style={styles.questionElement}>
              <Text>test</Text>
            </View>
            <View style={styles.questionElement}>
              <Text>test</Text>
            </View>
          </React.Fragment>
        )}
      </View>
    </Card>
  );
};

export default QuizCard;

const styles = StyleSheet.create({
  questionContent: {
    flexDirection: "row",
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
