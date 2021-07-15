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
  console.log({...props})

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

  const labelStyle = props.labelStyle || {
    'min-width': '100px',
    'display': 'inline-block',
    'color': 'black',
    'font-size': '16px'
  }
  // style样式的处理
  const styleFun = (style: any) => {
      let styleStr = '';
      const labelStyleKeys = Object.keys(style);
      labelStyleKeys.forEach((e: string) => {
        const labelStyleKeyName: any = style[e];
        styleStr = styleStr + e + ':' + labelStyleKeyName + ';'
      })
      console.log(styleStr)
      return styleStr;
  }

  const Span = styled.span`
    ${
      styleFun(labelStyle)
    }
  `;


  return (
    <div>
      <Span>{label}</Span>
      <input 
        // {...props}
        type={inputType} 
        defaultValue={defaultValue} 
        readOnly={readOnly} 
        disabled={disabled} 
        onChange={onChangeContent}/>
      { type === "password" && (
        <input type="button" value={hide? "show": "hide"} onClick={hidePassword}/>
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