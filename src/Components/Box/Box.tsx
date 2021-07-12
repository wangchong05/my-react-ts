import React from "react";
import styled, { StyledProps } from "styled-components";
import axios from "axios";
// import List from "../List/List";

export interface BoxProps extends StyledProps<any> {
  label?: string;
  // list: Array<object>;
  name?: string;
}

const arr = [
  {
    id: 1,
    name: 'wang'
  }, {
    id: 2,
    name: 'wang2'
  }, {
    id: 3,
    name: 'wang3'
  }, {
    id: 4,
    name: 'wang4'
  }, {
    id: 5,
    name: 'wang5'
  },
]

// const arr02 = [1,2,3,4,5,6,7]

const BoxWrapper: React.FC<BoxProps> = styled.div<BoxProps>`
  padding: 10px;
  border: 1px solid gray;
`;

// const getData = () => {
//   axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
//     console.log(res.data)
//     // const list: Array<any> = res.data;
//     // return res.data;
//     // return <List list={list}/>
//     return <List list={arr02}/>
//   })
// }

const getData2 = (list: Array<object>) => {
  // return arr02
  return (
    list.map((item: object, index: any) => {
      const {name}: BoxProps = item;
      return (
        <div key={index} style={{'color': 'gold'}}>
          <span>{index}</span>
          <span>,</span>
          <span>{name}</span>
          <hr/>
        </div>
      )
    })
  );
}

const Box = ({ label, children }: BoxProps) => {
  // getData()
  // const list: number[] = [1,2,3,23,4,5,44,6,34,7,7]

  // return <div data-testid='box'>{ label }</div>;

  return (
    <div>
      {/* <List list={list}/> */}
      {/* <div>{getData()}</div> */}
      {getData2(arr)}
      <BoxWrapper data-testid='box'>
        { label }
      </BoxWrapper>
    </div>
  );
}

export default Box;