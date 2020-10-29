import React from "react";
import { Text } from "react-native";

const TextWrapper = (props) => <Text {...props}>{props.children}</Text>;

export default TextWrapper;
