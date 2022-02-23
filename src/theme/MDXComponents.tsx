import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import Question from "@site/src/components/Question";

const WrappedMDXComponents = {
  ...MDXComponents,
  question: (props: { children: React.ReactNode }): JSX.Element => (
    <Question {...props} />
  ),
};

export default WrappedMDXComponents;
