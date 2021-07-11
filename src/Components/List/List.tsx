import React from 'react';
import styled, { StyledProps } from "styled-components";

export interface listProps extends StyledProps<any> {
  // list: Array<object>;
  list: Array<number>;
}

const List = (props: listProps) => {
  const { list } = props;
  return (
    list.map((item: number, index: any) => {
      return (
        <div key={index}>{item}{index}</div>
      )
    })
  );
}

// const List = () => {
//   return (
//     <div>'uibbiyyb'</div>
//   );
// }

export default List;
