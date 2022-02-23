import React from "react";

export default function Question({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <p>
      <div className="alert alert--info">{children}</div>
    </p>
  );
}
