import React from 'react';

export default function Question({ children }: { children: React.ReactNode }) {
  return <div className="alert alert--info">{children}</div>;
}
