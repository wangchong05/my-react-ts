import React from 'react';
import { render, screen } from '@testing-library/react';
 
import Home from '../Home';
 
describe('Home render', () => {
  test('renders Home component', () => {
    render(<Home />);// render渲染了Home组件
    // screen.debug();// 调试，命令行里会有应用组件的html输出
    
    // screen.getByRole('');// 提供一个不可用的角色，会报错，但是同时会检索出所有可选角色。
  });
  test('renders HomeTitle', () => {
    render(<Home />);
    screen.getByText('HomeTitle');
    expect(screen.getByText('HomeTitle')).toBeInTheDocument();// screen抓取HomeTitle元素
    expect(screen.getByText('aaaa')).toBeInTheDocument();// getByText精准匹配
 
    expect(screen.getByText(/Home/)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('please inpuut')).toBeInTheDocument();
  });
});

const multFun = (x: number, y: number) =>  {
  return x*y;
}
 
describe('arithmetic', () => {
  test('multiplication', () => {
    expect(multFun(3, 5)).toBe(15);
  });
});