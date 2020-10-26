import React from "react";
import { Platform, TouchableOpacity, StyleSheet } from "react-native";
import { getElementsFromProps, getButtonTextStyle } from "../utils/styles";
import Text from "./Text";
import { Buttons } from "../styles";

const Button = (props) => {
  const { OS } = Platform;
  const platformStyle = styles[`${OS}Btn`];
  const variants = [
    "outline",
    "large",
    "link",
    "disabled",
    "primary",
    "danger",
  ]; // variants accepted for this component
  const variantsFromProps = getElementsFromProps(variants, props);
  const variantStyles = Object.keys(variantsFromProps).map(
    (variant) => styles[variant]
  );
  const stylesFromProp = props.style || {};
  return (
    <TouchableOpacity
      style={[stylesFromProp, styles.btn, platformStyle, ...variantStyles]}
      {...props}
    >
      <Text style={styles[getButtonTextStyle(variantsFromProps)]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    ...Buttons.base,
  },
  primary: {
    ...Buttons.primary,
  },
  danger: {
    ...Buttons.danger,
  },
  iosBtn: {
    backgroundColor: "purple",
  },
  androidBtn: {
    backgroundColor: "blue",
  },
  disabled: {
    ...Buttons.disabled,
  },
  outline: {
    ...Buttons.outline,
  },
  large: {
    ...Buttons.large,
  },
  link: {
    ...Buttons.link,
  },
  text: {
    ...Buttons.text,
  },
  textLink: {
    ...Buttons.textLink,
  },
  textOutline: {
    ...Buttons.textOutLine,
  },
});
