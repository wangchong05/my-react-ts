import React, { useState } from 'react';
import styled, { StyledProps } from "styled-components";

export interface listProps extends StyledProps<any> {
  // list: Array<object>;
  // list: Array<object>;
  name?: string;
  age?: number;
  title?: string;
  body?: string;
  done?: boolean;
}

const List = (props: listProps) => {
  const { list } = props;
  const [listData, setListData] = React.useState(list)

  const deleteBtnClick = (index: number) => {
    console.log(index)
    // list.splice(index, 1);

    const listDataCopy = [...listData];
    listDataCopy.splice(index, 1);
    setListData(listDataCopy)
  }

  return (
    listData.map((item: object, index: any) => {
      const { name, age, title, body, done }: listProps = item;
      return (
        <div key={index} style={{'color': 'gold'}}>
          <span>{index}</span>
          <span>_</span>
          <span onClick={() => deleteBtnClick(index)}>{name || title}</span>
          <span>_</span>
          <span>{age || body}</span>
          <span>,</span>
          <span >{done?'Yes':'No'}</span>
          <hr/>
        </div>
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
