import { useState, ChangeEvent } from "react";

interface Props {
  handleOnChange: (inputValue: string) => void;
  value: string;
}

export const Form = (props: Props) => {
  const handleOnChange = (inputValue: string) => {
    props.handleOnChange(inputValue);
  };

  return (
    <input
      type="text"
      value={props.value}
      onChange={(e) => {
        handleOnChange(e.target.value);
      }}
      className="w-40 h-9 border-black border-2 m-6"
    />
  );
};
