import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";

interface CheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, isChecked, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    onChange(checked);
  };

  return (
    <InputDiv>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        {label}
      </label>
    </InputDiv>
  );
};

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.2rem 0;
  min-width: 6rem;
  max-width: 13rem;
`;

export default Checkbox;
