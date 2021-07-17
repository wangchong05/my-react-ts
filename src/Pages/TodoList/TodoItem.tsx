import React from 'react';
import styled, { StyledProps } from "styled-components";

export interface ItemProps extends StyledProps<any> {
  index: number;
  // complete?: boolean;
}

const TodoItem = (props: ItemProps) => {
  const {item, index, deleteItem, updateItem} = props;
  const { complete, action } = item;

  const styleFun = (index: number) => {
      return index%2 === 0 ? '#e8e6e6' : 'white';
  }

  const ItemWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: ${
      styleFun(index)
    };
  `;

  return (
    <ItemWrapper>
      <div>{action}</div>
      <span style={{color: complete?'green':'red'}} onClick={()=>{updateItem(index)}}>{complete?'Yes':'No'}</span>
      <span onClick={()=>{deleteItem(index)}}>delete</span>
    </ItemWrapper>
  )
}

export default TodoItem;
