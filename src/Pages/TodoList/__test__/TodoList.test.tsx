import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../TodoList';
// import TodoItem from '../TodoItem';
import renderer from "react-test-renderer";

beforeEach(() => {
  render(<TodoList />);
})
 
describe('TodoList render', () => {
  test('renders visible static elements in the TodoList', () => {
    screen.getByText('List');
    screen.getByText(/Update Time:/);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('please input')).toBeInTheDocument();

    // expect(screen.getByTestId('todolist')).toMatchSnapshot();
  });
});
 
describe('Input cases', () => {
  test('input text', () => {
    userEvent.type(screen.getByRole('textbox'), 'input text');
    expect(screen.getByDisplayValue('input text')).toBeInTheDocument();
  });
});
 
describe('the initial state of the rendered list', () => {
  test('initial state', () => {
    const complete0 = screen.getByTestId('complete0');
    expect(complete0).toHaveTextContent("No");
    const complete1 = screen.getByTestId('complete1');
    expect(complete1).toHaveTextContent("Yes");
  });
});


describe('add button click cases', () => {
  test('click the add button directly', async () => {
    await userEvent.click(screen.getByTestId('Add'));
    expect(screen.getByTestId('Add')).toBeDisabled();

    expect(screen.getByTestId('todolist')).toMatchSnapshot();
  });
  test('enter the value to empty, and then click the add button', async () => {
    userEvent.type(screen.getByRole('textbox'), '');
    await userEvent.click(screen.getByTestId('Add'));
    expect(screen.getByTestId('Add')).toBeDisabled();

    expect(screen.getByTestId('todolist')).toMatchSnapshot();
  });
  test('enter the value is not empty, and then click the add button', async () => {
    userEvent.type(screen.getByRole('textbox'), 'input text');
    expect(screen.getByTestId('Add')).toBeEnabled();
    
    expect(screen.getByTestId('todolist')).toMatchSnapshot();
  });
});


// describe('hover', () => {
//   test('hover', async () => {
//     const list0 = screen.getByTestId('list0');
//     await userEvent.hover(list0);
//     expect(screen.getByTestId('list0')).toHaveStyle({'background': '#e8e6e6'})
//   })
// })
 
describe('Click the status button', () => {
  test('Click the status button, text and style should be changed', async () => {
    // expect(screen.getByTestId('complete1')).toHaveStyle({'color': 'green'})
    // expect(screen.getByTestId('complete1')).toHaveTextContent("Yes");

    // await userEvent.click(screen.getByTestId('complete1'));
    // expect(screen.getByTestId('complete1')).toHaveStyle({'color': 'red'})
    // expect(screen.getByTestId('complete1')).toHaveTextContent("No");
    
    const list = screen.getAllByTestId(/complete/);
    list.map((e, index)=> {
      const styleChangeBefore = e.style;
      // const innerhtmlChangeBefore = e.innerHTML;
      userEvent.click(e);
      const styleChangeAfter = screen.getByTestId('complete' + index).style;
      // const innerhtmlChangeAfter = screen.getByTestId('complete' + index).innerHTML;

      expect(styleChangeBefore).not.toEqual(styleChangeAfter)
      // expect(innerhtmlChangeBefore).not.toBe(innerhtmlChangeAfter)
    })
  });
});


describe('Add and delete each item in the list', () => {
  test('A data was successfully added, and the length of the list was added by one', () => {
    const listLengthAddBefore = screen.getByTestId('list').childElementCount;
    userEvent.type(screen.getByRole('textbox'), 'input text');
    
    userEvent.click(screen.getByTestId('Add'));
    const listLengthAddAfter = screen.getByTestId('list').childElementCount;

    expect(listLengthAddBefore + 1).toBe(listLengthAddAfter)
    
    expect(screen.getByTestId('todolist')).toMatchSnapshot();
  });
  test('A piece of data was successfully deleted and the length of the list was reduced by one', () => {// 成功删除一条数据，列表长度减一-----------(9)
    const listLengthDeleteBefore = screen.getByTestId('list').childElementCount;
    
    const list = screen.getAllByTestId(/delete/);
    list.map((e)=> {
      userEvent.click(e);
      const listLengthDeleteAfter = screen.getByTestId('list').childElementCount;
  
      expect(listLengthDeleteBefore - 1).toBe(listLengthDeleteAfter)
    })
    
    expect(screen.getByTestId('todolist')).toMatchSnapshot();

    // screen.getByTestId('update-time').innerHTML
  });
});
