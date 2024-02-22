import React from "react";

interface Props {
  buttonName: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({
  buttonName,
  onClick,
}: Props): JSX.Element => {
  return <button onClick={onClick}>{buttonName}</button>;
};

export default Button;
