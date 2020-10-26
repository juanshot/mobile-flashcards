import * as Colors from "./colors";
import * as Spacing from "./spacing";
import * as Typography from "./typography";

export const base = {
  padding: Spacing.small,
  paddingHorizontal: Spacing.largest,
  height: Spacing.largest + 15,
  alignSelf: "center",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: Spacing.smallest,
  marginVertical: 3,
  width: Spacing.largest * 10,
};

export const text = {
  color: Colors.white,
  fontSize: Typography.baseFontSize,
  fontWeight: "bold",
  letterSpacing: 1,
};

export const small = {
  paddingHorizontal: Spacing.small,
  paddingVertical: Spacing.small + 2,
  width: 75,
};
export const disabled = {
  ...base,
  backgroundColor: Colors.lightGray,
};
export const link = {
  ...base,
  backgroundColor: "transparent",
};
export const outline = {
  ...base,
  borderWidth: 1,
  borderColor: Colors.darkestGray,
  backgroundColor: Colors.white,
};
export const textLink = {
  ...text,
  color: Colors.linkText,
};
export const textOutLine = {
  ...text,
  color: Colors.darkestGray,
};
export const primary = {
  backgroundColor: "blue",
};
export const danger = {
  backgroundColor: "red",
};
