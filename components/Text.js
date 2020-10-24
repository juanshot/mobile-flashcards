import React from "react";
import { StyleSheet, Text } from "react-native";

const TextWrapper = (props) => (
  <Text style={styles.textWrapper} {...props}>
    {props.children}
  </Text>
);

export default TextWrapper;

const styles = StyleSheet.create({
  textWrapper: {},
});
