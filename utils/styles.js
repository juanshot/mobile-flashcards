export const getElementsFromProps = (elements, props) => {
  const result = {};
  elements.forEach((element) => {
    const hasProperty = Boolean(props[element]);
    if (hasProperty) {
      result[element] = props[element];
    }
  });
  return result;
};

export const getButtonTextStyle = (variants) => {
  const buttonTextStyles = {
    outline: "textOutline",
    link: "textLink",
  };
  if (!Object.keys(variants).length) {
    return ["text"];
  }

  return Object.keys(variants).map(
    (variant) => buttonTextStyles[variant] || "text"
  );
};
