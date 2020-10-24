import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "./Card";

const QuizCard = () => {
  return (
    <Card>
      <View style={styles.questionContent}>
        <View style={styles.questionElement}>
          <Text>
            Questiondfsdkfs;ldfkds;lfksd;flkdsf;ldskf;sdlfkds;flksdf;dslfkdsf;ldskf;l
          </Text>
        </View>

        <View style={styles.questionElement}>
          <Text>Response</Text>
        </View>
      </View>
    </Card>
  );
};

export default QuizCard;

const styles = StyleSheet.create({
  questionContent: {
    minHeight: 300,
  },
  showIcon: {
    alignSelf: "flex-start",
  },
  questionElement: {
    marginVertical: 10,
  },
});
