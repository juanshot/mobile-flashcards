import React from "react";
import { View, Text } from "react-native";
import Card from "./Card";

const DeckItem = (props) => (
  <Card onPress={props.onPress}>
    <View>
      <Text>{JSON.stringify(props)}</Text>
    </View>
    <View>
      <Text>{props.numCards} cards</Text>
    </View>
  </Card>
);

export default DeckItem;
