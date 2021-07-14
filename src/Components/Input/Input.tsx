import React, { useState, ReactNode } from "react";
import styled, { StyledProps } from "styled-components";

export interface InputProps extends StyledProps<any> {
  label?: string;
  type?: "text" | "date" | "password" | "email" | "radio";
  value?: string | number;
  readonly?: boolean;
  disabled?: boolean;
}

// const InputWrapper: React.FC<InputProps> = styled.div<InputProps>`
//   padding: 10px;
//   border: 1px solid gray;
// `;

const Input = (props: InputProps) => {
  const { 
    label, 
    KeyName, 
    type, 
    defaultValue, 
    readOnly, 
    changeContent, 
    disabled 
  }: InputProps = props;

  const [inputType, setInputType] = useState(type)
  console.log(inputType)
  const [hide, setHide] = useState(true)

  const hidePassword = (): boolean => {
    const hideTemp = !hide;
    setHide(hideTemp)
    setInputType(hideTemp?"password":"text")
    return true
  }

  const onChangeContent = (e:any) => {
    // console.log(e.target.value)
    changeContent({[KeyName]: type === "password" ? window.btoa(e.target.value) : e.target.value})
  }


  return (
    <div>
      <span style={{'minWidth': '100px', 'display': 'inline-block'}}>{label}</span>
      <input 
        type={inputType} 
        defaultValue={defaultValue} 
        readOnly={readOnly} 
        onChange={onChangeContent}
        disabled={disabled}/>
      { type === "password" ? (
        <input type="button" value={hide? "show": "hide"} onClick={hidePassword}/>
      ) : (
        ''
      )}
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  value: '',
  readonly: false
};

export default Input;