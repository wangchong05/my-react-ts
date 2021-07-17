import React from 'react';
import styled, { StyledProps } from "styled-components";

export interface ItemProps extends StyledProps<any> {}

const TodoItem = (props: ItemProps) => {
  const {item, index, deleteItem, updateItem}: ItemProps = props;
  const { complete, action }: ItemProps = item;

  const styleFun = (index: number) => {
      return index%2 === 0 ? '#f0efef' : 'white';
  }

  const ItemWrapper = styled.div`
    width: 100%;
    display: flex;
    background: ${styleFun(index)};
    text-align: left;
    &:hover {
      background: #e8e6e6;
    }
  `;

  return (
    <ItemWrapper>
    {/* <div> */}
      <div style={{flex: 2}}>{action}</div>
      <div style={{flex: 2}}><span style={{color: complete?'green':'red'}} onClick={()=>{updateItem(index)}}>{complete?'Yes':'No'}</span></div>
      <div style={{flex: 1}}><span onClick={()=>{deleteItem(index)}}>delete</span></div>
    {/* </div> */}
    </ItemWrapper>
  )
}

export default TodoItem;
