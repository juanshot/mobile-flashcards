import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { Inputs } from "../styles";

const Input = (props) => {
  return <TextInput {...props} style={styles.input} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    ...Inputs.base,
  },
});
