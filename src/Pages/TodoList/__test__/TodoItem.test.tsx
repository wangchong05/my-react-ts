import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../TodoList';
import TodoItem from '../TodoItem';

const listOrigin = [
  {
    action: 'drink',
    complete: false
  }, {
    action: 'eat',
    complete: true
  }
]

beforeEach(() => {//每次测试之前运行
  listOrigin.map((item, index) => {
    const deleteItem = jest.fn()
    const updateItem = jest.fn()
    render(<TodoItem item={item} key={index} index={index} deleteItem={deleteItem} updateItem={updateItem}></TodoItem>)
  })
})

// describe('hover', () => {
//   test('测试hover时的反应', async () => {
//     const list0 = screen.getByTestId('list0');
//     await userEvent.hover(list0);
//     expect(list0).toHaveStyle({'background': '#e8e6e6'})
//   })
//   test('测试hover时的反应2', async () => {
//     const list1 = screen.getByTestId('list1');
//     await userEvent.hover(list1);
//     expect(list1).toHaveLength(12)
//   })
// })
