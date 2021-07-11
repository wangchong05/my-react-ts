import React from "react";
// import { ReactDOM } from "react";
import { render, screen } from '@testing-library/react';
import ReactDom from "react-dom";
// import "jest-dom/extend-expect";
import renderer from "react-test-renderer";
import Box from "./../Box"

// 首先看该组件会不会渲染
it("renders without crashing", ()=> {// 渲染而不崩溃
  const div = document.createElement("div")// 创建一个div，然后尝试渲染
  ReactDom.render(<Box></Box>, div)// 把Box渲染在刚才创建的div上
})

// 正确渲染了Box
it("renders Box correctly", ()=> {
  const { getByTestId } = render(<Box label={"box test content"}></Box>)// 需要使用render函数，这次在Box里传递label。需要使用数据测试访问Box元素
  // 因此函数返回一个getByTestId的函数
  expect(getByTestId('box')).toHaveTextContent("box test content");// 用期望将getByTestId做包装，通过数据测试ID获得这个节点
})

// 如果想通过传递不同的标签来渲染其他内容，比如，想通过保存，将其保存在内部
it("renders Box correctly 02", ()=> {
  const { getByTestId } = render(<Box label={"save"}></Box>)
  expect(getByTestId('box')).toHaveTextContent("save");
})

// 
it("matchs snapshot", ()=> {
  const tree = renderer.create(<Box label={"save"}></Box>).toJSON();
  // 创建名为save的标签，将其转换为JSON，所以这会将其转换为虚拟DOM对象
  // 这个创建出来是个树的形式，已经将他保存到树里面，接下来期望树匹配快照
  expect(tree).toMatchSnapshot();// 每当运行这个语句来匹配快照时，它都会查看文件夹结构，并且在其中寻找名为“快照”的文件夹。
  // 这个文件夹在第一次运行时会被创建，会在这里面创建快照，并且存储
  // 会有个***.test.tsx.snap的文件，里面存储的就是你传入的东西，它呈现了整个组件。

  // 创建这个有什么用？
    // 默认他会在你提交代码时执行此操作，并且当代码推到分支时，它会跟踪快照。
    // 这次提交了代码，下次有人改了某一项，就是可能会在测试里面创建一个和上次快照不匹配的快照，然后会抛出一个错误。
    // 如果改的是正确的，就是要这样改，按u来更新快照，那么snapshot里面就保存了最新快照。
    // 快照就是失败了后，是执行代码，还是撤销代码
})

// 
it("matchs snapshot 02", ()=> {
  const tree = renderer.create(<Box label={"save 02"}></Box>).toJSON();
  expect(tree).toMatchSnapshot();
})