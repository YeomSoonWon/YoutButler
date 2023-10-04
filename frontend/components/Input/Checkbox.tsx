import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";

interface CheckboxProps {
  label?: string;
  name?: string;
  isChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, name, isChecked: propIsChecked, onChange }) => {
  const [isChecked, setIsChecked] = useState(propIsChecked || false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setIsChecked(checked);
    if (onChange) {
      onChange(checked);
    }
  };

  return (
    <InputDiv>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
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
