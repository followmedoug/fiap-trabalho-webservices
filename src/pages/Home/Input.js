import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { useField } from "@unform/core";
import { BsPaperclip } from "react-icons/bs";

const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 25px;
  padding: 6px 15px;
  width: 100%;
`;

const Label = styled.label`
  color: black;
  font-size: 15pt;
  font-weight: 900;
`;

export default function Input({ label, name, inputfile, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <Label>
      {label}
      <StyledInput ref={inputRef} defaultValue={defaultValue} {...rest} />
      {inputfile && <BsPaperclip />}
    </Label>
  );
}
