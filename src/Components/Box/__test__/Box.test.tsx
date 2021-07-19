import React from "react";
// import { ReactDOM } from "react";
import { render, screen } from '@testing-library/react';
import ReactDom from "react-dom";
// import "jest-dom/extend-expect";
import renderer from "react-test-renderer";
import Box from "./../Box"

// 首先看该组件会不会渲染
test("renders without crashing", ()=> {// 渲染而不崩溃
  const div = document.createElement("div")// 创建一个div，然后尝试渲染
  ReactDom.render(<Box></Box>, div)// 把Box渲染在刚才创建的div上
})

// 正确渲染了Box
test("renders Box correctly", ()=> {
  const { getByTestId } = render(<Box label={"box test content"}></Box>)// 需要使用render函数，这次在Box里传递label。需要使用数据测试访问Box元素
  // 因此函数返回一个getByTestId的函数
  expect(getByTestId('box')).toHaveTextContent("box test content");// 用期望将getByTestId做包装，通过数据测试ID获得这个节点
})

// 如果想通过传递不同的标签来渲染其他内容，比如，想通过保存，将其保存在内部
test("renders Box correctly 02", ()=> {
  const { getByTestId } = render(<Box label={"save"}></Box>)
  expect(getByTestId('box')).toHaveTextContent("save");
})

// 
test("matchs snapshot", ()=> {
  const tree = renderer.create(<Box label={"save"}></Box>).toJSON();
  // 创建名为save的标签，将其转换为JSON，所以这会将其转换为虚拟DOM对象
  // 这个创建出来是个树的形式，已经将他保存到树里面，接下来期望树匹配快照
  expect(tree).toMatchSnapshot();
})

// 
test("matchs snapshot 02", ()=> {
  const tree = renderer.create(<Box label={"save 02"}></Box>).toJSON();
  expect(tree).toMatchSnapshot();
})