import { InputNumber } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";

interface InputNumberProps {
  defaultValue: number;
  setValue: (value: number) => void;
}

const Input = ({ defaultValue, setValue }: InputNumberProps) => {
  return (
    <>
      <InputNumber
        onChange={(value) => setValue(value)}
        defaultValue={defaultValue}
        min={0}
      />
    </>
  );
};

export default Input;
