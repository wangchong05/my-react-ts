import React, { useState, ReactNode } from "react";
import styled, { StyledProps } from "styled-components";

export interface InputProps extends StyledProps<any> {
  label?: string;
  type?: "date" | "password" | "text";
  defaultValue?: string | number;
  readOnly?: boolean;
  disabled?: boolean;
  labelStyle?: object;
}

const Input = (props: InputProps) => {
  const { 
    label, 
    type, 
    defaultValue, 
    readOnly, 
    disabled, 
    labelStyle
  }: InputProps = props;

  const [inputType, setInputType] = useState(type)
  const [hide, setHide] = useState(true)

  const hidePassword = (): boolean => {
    const hideTemp = !hide;
    setHide(hideTemp)
    setInputType(hideTemp?"password":"text")
    return true
  }

  const defaultLabelStyle = {
    'min-width': '50px',
    'display': 'inline-block',
    'color': 'black',
    'font-size': '16px'
  }

  const defaultInputStyle = {
    'minWidth': '200px',
    'border': '1px solid gray'
  }

  const labelStyleProps = labelStyle ? Object.assign(defaultLabelStyle, labelStyle) : defaultLabelStyle

  // style样式的处理
  const styleFun = (style: any) => {
      let styleStr = '';
      const labelStyleKeys = Object.keys(style);
      labelStyleKeys.forEach((e: string) => {
        const labelStyleKeyName: any = style[e];
        styleStr = styleStr + e + ':' + labelStyleKeyName + ';'
      })
      return styleStr;
  }

  const Span = styled.span`
    ${
      styleFun(labelStyleProps)
    }
  `;

  return (
    <div data-testid='labe-input' style={{display: 'flex', margin: '10px'}}>
      <Span data-testid='span'>{label}</Span>
      <input 
        data-testid='input'
        // {...props}// props如何不带value属性
        type={inputType} 
        defaultValue={defaultValue} 
        readOnly={readOnly} 
        disabled={disabled} 
        style={props.inputStyle ? Object.assign(defaultInputStyle, props.inputStyle) : defaultInputStyle}
        />
      { type === "password" && (
        <input data-testid='input-button' type="button" value={hide? "show": "hide"} onClick={hidePassword}/>
      )}
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  value: '',
  readOnly: false
};

export default Input;