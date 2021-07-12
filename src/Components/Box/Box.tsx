import React from "react";
import styled, { StyledProps } from "styled-components";
import axios from "axios";
import List from "../List/List";

export interface BoxProps extends StyledProps<any> {
  label?: string;
  // list: Array<object>;
  name?: string;
  age?: number;
}

const arr = [
  {
    id: 1,
    name: 'wang',
    age: 15
  }, {
    id: 2,
    name: 'wang2',
    age: 23
  }, {
    id: 3,
    name: 'wang3',
    age: 44,
    done: true
  }, {
    id: 4,
    name: 'wang4',
    age: 42
  }, {
    id: 5,
    name: 'wang5',
    age: 8
  },
]

const BoxWrapper: React.FC<BoxProps> = styled.div<BoxProps>`
  padding: 10px;
  border: 1px solid gray;
`;

const getData = () => {
  axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
    console.log(res.data)
    const list: Array<object> = res.data;
    return <List list={list}/>
  })
}

const getData2 = (list: Array<object>) => {
  return (
    list.map((item: object, index: any) => {
      const { name, age }: BoxProps = item;
      return (
        <div key={index} style={{'color': 'gold'}}>
          <span>{index}</span>
          <span>_</span>
          <span>{name}</span>
          <span>_</span>
          <span>{age}</span>
          <hr/>
        </div>
      )
    })
  );
}

const getData3 = () => {
  return <List list={arr}/>
  
}

const Box = ({ label, children }: BoxProps) => {
  getData()

  // return <div data-testid='box'>{ label }</div>;

  return (
    <div>
      {/* <List list={arr}/> */}

      {/* <div>{getData()}</div> */}
      {/* 不能将类型“void”分配给类型“ReactNode”。ts(2322)
index.d.ts(1346, 9): 所需类型来自属性 "children"，在此处的 "DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>" 类型上声明该属性
const getData: () => void */}
      <div>{getData3()}</div>

      {/* {getData2(arr)} */}
      <BoxWrapper data-testid='box'>
        { label }
      </BoxWrapper>
    </div>
  );
}

export default Box;