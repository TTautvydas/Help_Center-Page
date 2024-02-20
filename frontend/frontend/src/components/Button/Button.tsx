import React from "react";

interface Props {
  buttonName: string;
  onClick: () => void;
}

export function Button({ buttonName, onClick }: Props): JSX.Element {
  return <button onClick={onClick}>{buttonName}</button>;
}
