import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import Container from "../components/Container";
import Button from "../components/Button";
import ScreenWithActions from "../components/hoc/ScreenWithAnctionLayout";

const QuizResult = ({ navigation }) => {
  const goTo = (url) => {
    navigation.navigate(url);
  };
  return (
    <Container>
      <ScreenWithActions
        top={
          <View style={styles.resultContainer}>
            <Card>
              <Text>Results of the Quiz</Text>
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

export default QuizResult;

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
  },
});
