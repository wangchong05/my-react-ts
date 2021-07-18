import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../TodoList';
// import TodoItem from '../TodoItem';
import renderer from "react-test-renderer";

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
 
describe('测列表complete的初始值', () => {// input输入内容-----------(3)
  test('input text', () => {
    const complete0 = screen.getByTestId('complete0');
    expect(complete0).toHaveTextContent("No");
    const complete1 = screen.getByTestId('complete1');
    expect(complete1).toHaveTextContent("Yes");
  });
});


describe('Click cases', () => {// 点击情况-----------(3)
  test('add button is enabled', async () => {
    await userEvent.click(screen.getByTestId('Add'));
    expect(screen.getByTestId('Add')).toBeEnabled();
  });
});


// describe('hover', () => {// ---------(4)
//   test('测试hover时的反应', async () => {
//     const list0 = screen.getByTestId('list0');
//     await userEvent.hover(list0);
//     expect(list0).toHaveStyle({'background': '#e8e6e6'})
//   })
//   test('测试hover时的反应2', async () => {
//     const list1 = screen.getByTestId('list1');
//     await userEvent.hover(list1);
//     expect(list1).toHaveStyle({'background': '#e8e6e6'})
//   })
// })
 
// describe('点击complete的时候,yes和no的切换', () => {// 点击情况-----------(5)
//   test('点击complete的时候,yes和no的切换', async () => {
//     const complete0 = screen.getByTestId('complete0');
//     // expect(complete0).toHaveStyle({'color': 'red'})
//     await userEvent.click(complete0);
//     // expect(complete0).toHaveStyle({'color': 'green'})
//     expect(complete0).toHaveTextContent("Yes");
//   });
// });
 
// describe('点击complete的时候,yes和no的切换2', () => {// 点击情况-----------(6)
//   test('点击complete的时候,yes和no的切换', async () => {
//     const complete1 = screen.getByTestId('complete1');
//     // expect(complete1).toHaveStyle({'color': 'green'})

//     await userEvent.click(complete1);
//     // expect(complete1).toHaveStyle({'color': 'red'})
//     expect(complete1).toHaveTextContent("No");
//   });
// });
 
// describe('点击complete的时候,yes和no的切换2222', () => {// 点击情况-----------(6)
//   test('点击complete的时候,yes和no的切换222', async () => {
//     const tree = renderer.create(<TodoList />).toJSON();
//     console.log('--------------------------tree--------------------------')
//     console.log(tree)
//     console.log(tree.children[5].children)
//     console.log('--------------------------tree--------------------------')
//   });
// });
 
// describe('输入内容点击add的时候,列表长度加一', () => {// 点击情况-----------(7)
//   test('输入内容点击add的时候,列表长度加一', async () => {
//     const tree = renderer.create(<TodoList />).toJSON();
//     const listLength = tree.children[5].children.length;
//     console.log('--------------------------tree1--------------------------')
//     console.log(listLength)
//     userEvent.type(screen.getByRole('textbox'), 'input text');
//     expect(screen.getByDisplayValue('input text')).toBeInTheDocument();

//     await userEvent.click(screen.getByTestId('Add'));
//     const newListLength = tree.children[5].children.length;
//     console.log(newListLength)
//     console.log('--------------------------tree2--------------------------')

//     // expect(screen.getByTestId('input')).toHaveAttribute('type', 'text');
//     // const tree = renderer.create(<TodoList />).toJSON();
//     // console.log('--------------------------tree--------------------------')
//     // console.log(tree)
//     // console.log(tree.children[5].children)
//     // console.log('--------------------------tree--------------------------')
//   });
// });