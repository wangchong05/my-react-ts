import React, { useState, useEffect, useRef } from 'react';
import styled, { StyledProps } from "styled-components";
import TodoItem from './TodoItem';

export interface TodoItemProps extends StyledProps<any> {
  item?: object;
  index?: number;
  deleteItem?: void;
  updateItem?: void;
  complete?: boolean;
}

const listOrigin = [
  {
    action: 'drink',
    complete: false
  }, {
    action: 'eat',
    complete: true
  }
]

const TodoList = () => {

  const [list, setList] = useState(
    listOrigin
  )

  const [updateTime, setUpdateTime] = useState('')

  const myRef = useRef<any>('')

  useEffect(()=>{
    setUpdateTime(new Date().toLocaleString())
  }, [list])

  // 添加
  const addItem = () => {
    if(!myRef.current.value || list.find((e) => { return e.action === myRef.current.value })) {
      alert('请输入内容或内容重复')
      return
    }
    const newList = [...list, {action: myRef.current.value, complete: false}]
    setList(newList)
    myRef.current.value = ''
  }

  // 删除
  const deleteItem = (index: number) => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  // 更新单项
  const updateItem = (index: number) => {
    const newList = [...list]
    newList[index]['complete'] = !newList[index]['complete']
    setList(newList)
  }

  return (
    <div data-testid='todolist'>
      <h3>List</h3>
      <div>Update Time: {updateTime}</div>
      <br/>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <input type="text" ref={myRef} placeholder={'please input'} data-testid='input'/>
        <button onClick={addItem} data-testid='Add'>add</button>
      </div>
      <br/>

      {
        list.map((item, index) => {
          return <TodoItem item={item} key={index} index={index} deleteItem={deleteItem} updateItem={updateItem}/>
        })
      }
    </div>
  );
}

export default TodoList;
