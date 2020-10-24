import * as Typography from "./typography";
import * as Colors from "./colors";
import * as Spacing from "./spacing";

export const base = {
  alignItems: "center",
  width: Spacing.fullWith,
  backgroundColor: Colors.white,
  borderWidth: Spacing.hairline,
  borderColor: Colors.darkestGray,
  marginHorizontal: Spacing.tiny,
  marginVertical: Spacing.tiny,
  padding: Spacing.base,
};

export const text = {
  fontSize: Typography.bodyText,
};
