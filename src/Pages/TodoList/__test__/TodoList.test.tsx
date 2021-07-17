import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../TodoList';

beforeEach(() => {
  render(<TodoList />);
})
 
describe('TodoList render', () => {// TodoList渲染---------------------(1)
  test('renders visible static elements in the TodoList', () => {
    screen.getByText('List');
    screen.getByText(/Update Time:/);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('please input')).toBeInTheDocument();

    // expect(screen.getByTestId('todolist')).toMatchSnapshot();// TodoList生成快照
  });
});
 
describe('Input cases', () => {// input输入内容-----------(2)
  test('input text', () => {
    userEvent.type(screen.getByRole('textbox'), 'input text');
    expect(screen.getByDisplayValue('input text')).toBeInTheDocument();
  });
});
 
describe('Click cases', () => {// 点击情况-----------(3)
  test('add button is enabled', async () => {
    userEvent.click(screen.getByTestId('Add'));
    expect(screen.getByTestId('Add')).toBeEnabled();
    // userEvent.click(getByTestId('input-button'));
  });
  // test('add button click', async () => {
  //   const add = jest.fn()
  //   await userEvent.click(screen.getByText('add'))
  //   expect(add).toHaveBeenCalledTimes(1)
  // });
});