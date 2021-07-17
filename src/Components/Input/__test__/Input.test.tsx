import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../Input';
// import { ThemeProvider } from 'styled-components'

// beforeEach(() => {
//   render(<Input />);
// })
 
describe('Input render', () => {// Input渲染----------(1)
  test('renders visible static elements in the Input', () => {
    const { getByTestId } = render(<Input label={'first name'}></Input>)
    // screen.getByRole('')
    
    expect(getByTestId('input')).toBeInTheDocument();
    expect(getByTestId('span')).toHaveTextContent("first name");// label render
  });
});
 
describe('Props', () => {// props----------
  test('type是password的时候input-button展示', () => {// props----------(2)
    const { getByTestId } = render(<Input type={'password'}></Input>)
    expect(getByTestId('input-button')).toBeInTheDocument();
  });



  test('输入框输入内容---不传type', () => {// props----------(3)
    render(<Input></Input>)
    userEvent.type(screen.getByTestId('input'), 'input value');
    expect(screen.getByDisplayValue('input value')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'text');
  });
  test.each([
    ['text', 'input text value', 'input text value'],
    ['password', 'input password value', 'input password value']
  ])('输入框输入内容---text,password', (type, val, expected) => {// props----------(4)
    render(<Input type={type}></Input>)
    userEvent.type(screen.getByTestId('input'), val);
    expect(screen.getByDisplayValue(expected)).toBeInTheDocument();
    expect(screen.getByTestId('input')).toHaveAttribute('type', type);
  });
  test('输入框输入内容---date', () => {// props----------(5)
    render(<Input type={'date'}></Input>)
    userEvent.type(screen.getByTestId('input'), '2017-04-01');
    expect(screen.getByDisplayValue('2017-04-01')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'date');
  });

  test('defaultValue', async () => {// props----------(6)
    const { getByTestId } = render(<Input defaultValue={'Tom'}></Input>)
    expect(getByTestId('input')).toHaveValue("Tom");
  });



  test('readOnly', async () => {// props----------(7)
    const { getByTestId } = render(<Input readOnly></Input>)
    expect(getByTestId('input')).toHaveAttribute('readOnly')
  });

  test('not readOnly', async () => {// props----------(8)
    const { getByTestId } = render(<Input></Input>)
    expect(getByTestId('input')).not.toHaveAttribute('readOnly')
  });

  test('disabled', async () => {// props----------(9)
    const { getByTestId } = render(<Input disabled></Input>)
    expect(getByTestId('input')).toHaveAttribute('disabled')
  });

  test('not disabled', async () => {// props----------(10)
    const { getByTestId } = render(<Input></Input>)
    expect(getByTestId('input')).not.toHaveAttribute('disabled')
  });

  test('style', async () => {// props----------(11)
    const { getByTestId } = render(<Input labelStyle={{'min-width': '100px','font-size': '14px'}}></Input>)
    expect(getByTestId('span')).toHaveStyle({'min-width': '100px','font-size': '14px'})
  });

  test('password的时候显示密码的按钮的切换', async () => {// props----------(12)
    const { getByTestId } = render(<Input type={'password'}></Input>)
    expect(getByTestId('input-button')).toHaveValue("show");
    userEvent.click(getByTestId('input-button'));
    expect(getByTestId('input-button')).toHaveValue("hide");
  });
});
