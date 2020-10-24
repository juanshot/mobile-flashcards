import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImagePropTypes,
} from "react-native";
import { Cards } from "../styles";

const Card = ({ children, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.card}>{children}</View>
  </TouchableOpacity>
);

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  card: {
    ...Cards.base,
  },
});
