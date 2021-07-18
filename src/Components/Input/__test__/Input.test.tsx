import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '../Input';
 
describe('Input render', () => {
  test('renders visible static elements in the Input', () => {
    const { getByTestId } = render(<Input label={'first name'}></Input>)
    // screen.getByRole('')
    
    expect(getByTestId('input')).toBeInTheDocument();
    expect(getByTestId('span')).toHaveTextContent("first name");// label render
  });
});
 
describe('Props', () => {
  test('type is password, B should be shown', () => {
    const { getByTestId } = render(<Input type={'password'}></Input>)
    expect(getByTestId('input-button')).toBeInTheDocument();

    expect(getByTestId('labe-input')).toMatchSnapshot();
  });
  test('no type', () => {
    render(<Input></Input>);
    userEvent.type(screen.getByTestId('input'), 'input value');
    expect(screen.getByDisplayValue('input value')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'text');
    
    expect(screen.getByTestId('labe-input')).toMatchSnapshot();
  });
  test.each([
    ['text', 'input text value', 'input text value'],
    ['password', 'input password value', 'input password value']
  ])('type is password or text', (type, val, expected) => {
    render(<Input type={type}></Input>);
    userEvent.type(screen.getByTestId('input'), val);
    expect(screen.getByDisplayValue(expected)).toBeInTheDocument();
    expect(screen.getByTestId('input')).toHaveAttribute('type', type);
    
    expect(screen.getByTestId('labe-input')).toMatchSnapshot();
  });
  test('type is date', () => {
    render(<Input type={'date'}></Input>);
    userEvent.type(screen.getByTestId('input'), '2017-04-01');
    expect(screen.getByDisplayValue('2017-04-01')).toBeInTheDocument();
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'date');
    
    expect(screen.getByTestId('labe-input')).toMatchSnapshot();
  });

  test('incoming defaultValue, the textbox should show the same value', async () => {
    const { getByTestId } = render(<Input defaultValue={'Tom'}></Input>);
    expect(getByTestId('input')).toHaveValue("Tom");
    
    expect(getByTestId('labe-input')).toMatchSnapshot();
  });

  test('readOnly, the textbox should have readOnly attribute', async () => {
    const { getByTestId } = render(<Input readOnly></Input>);
    expect(getByTestId('input')).toHaveAttribute('readOnly');
    
    expect(getByTestId('labe-input')).toMatchSnapshot();
  });

  test('not readOnly, the textbox should not have readOnly attribute', async () => {
    const { getByTestId } = render(<Input></Input>);
    expect(getByTestId('input')).not.toHaveAttribute('readOnly');
    
    expect(getByTestId('labe-input')).toMatchSnapshot();
  });

  test('disabled', async () => {
    const { getByTestId } = render(<Input disabled></Input>);
    expect(getByTestId('input')).toHaveAttribute('disabled')
    
    expect(getByTestId('labe-input')).toMatchSnapshot();
  });

  test('not disabled', async () => {
    const { getByTestId } = render(<Input></Input>);
    expect(getByTestId('input')).not.toHaveAttribute('disabled');
    
    expect(getByTestId('labe-input')).toMatchSnapshot();
  });

  test('style', async () => {
    const { getByTestId } = render(<Input labelStyle={{'min-width': '100px','font-size': '14px'}}></Input>);
    expect(getByTestId('span')).toHaveStyle({'min-width': '100px','font-size': '14px'});
    
    expect(getByTestId('labe-input')).toMatchSnapshot();
  });

  test('type is password, when the Show Password button is clicked, the correct text can be displayed', async () => {
    const { getByTestId } = render(<Input type={'password'}></Input>);
    expect(getByTestId('input-button')).toHaveValue("show");
    await userEvent.click(getByTestId('input-button'));
    expect(getByTestId('input-button')).toHaveValue("hide");
    
    expect(getByTestId('labe-input')).toMatchSnapshot();
  });
});
