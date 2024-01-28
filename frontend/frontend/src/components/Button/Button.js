import React from "react";

export default function Button({ buttonName, onClick }) {
  return <button onClick={onClick}>{buttonName}</button>;
}
