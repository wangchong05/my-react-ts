import React, { useState } from 'react';
// import Button from '../../Components/Button/Button';
// import Box from '../../Components/Box/Box';
import Input from '../../Components/Input/Input';

const About = () => {

  const [content, setContent] = useState({
    firstName: "hugvyvguyvuv",
    date: "2017-04-01"
  })

  const [newValue, setNewValue] = useState(Object.assign({}, content))

  const submitData = () => {
    console.log(content)
    console.log(newValue)
  }

  const changeContent = (x: object) => {
    setNewValue(Object.assign(newValue, x))
  }


  return (
    <div style={{'textAlign': 'left'}}>
      <div style={{'display': 'flex'}}>
        <Input 
          label={'first name'} 
          KeyName={'firstName'} 
          defaultValue={content.firstName} 
          labelStyle={{'min-width': '100px','font-size': '14px'}}
          changeContent={changeContent}/>
      </div>
      <div style={{'display': 'flex'}}>
        <Input 
          label={'last name'} 
          KeyName={'lastName'} 
          disabled
          labelStyle={{'min-width': '100px','font-size': '14px'}}
          changeContent={changeContent}/>
      </div>
      <div style={{'display': 'flex'}}>
        <Input 
          label={'date'} 
          KeyName={'date'} 
          type={"date"} 
          labelStyle={{'min-width': '100px','font-size': '14px'}}
          defaultValue={content.date} 
          changeContent={changeContent}/>
      </div>
      <div style={{'display': 'flex'}}>
        <Input 
          label={'password'} 
          KeyName={'password'} 
          type={"password"} 
          labelStyle={{'min-width': '100px','font-size': '14px'}}
          changeContent={changeContent}/>
      </div>
    </div>
  );
}

export default About;
