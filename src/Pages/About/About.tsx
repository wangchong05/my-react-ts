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
      {/* About
      <br />
      <Button disabled={false} variant={'light.primary'}/> */}
      {/* <Box label={'Box title'}/> */}

      <div style={{'display': 'flex'}}>
        <Input label={'first name'} KeyName={'firstName'} defaultValue={content.firstName} changeContent={changeContent}/>
      </div>
      <div style={{'display': 'flex'}}>
        <Input label={'last name'} KeyName={'lastName'} disabled changeContent={changeContent}/>
      </div>
      <div style={{'display': 'flex'}}>
        <Input label={'date'} KeyName={'date'} type={"date"} defaultValue={content.date} changeContent={changeContent}/>
      </div>
      <div style={{'display': 'flex'}}>
        <Input label={'password'} KeyName={'password'} type={"password"} changeContent={changeContent}/>
      </div>
      <div style={{'display': 'flex'}}>
        <Input label={'radio'} KeyName={'radio'} type={"radio"} changeContent={changeContent}/>
      </div>
      <div onClick={submitData}>submit</div>
    </div>
  );
}

export default About;
