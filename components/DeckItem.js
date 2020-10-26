import React from "react";
import { View, Text } from "react-native";
import Card from "./Card";

const DeckItem = (props) => (
  <Card onPress={props.onPress}>
    <View>
      <Text>{props.item.name}</Text>
    </View>
    <View>
      <Text>{props.item.cards ? props.item.cards.length : 0} cards</Text>
    </View>
  </Card>
);

export default DeckItem;
