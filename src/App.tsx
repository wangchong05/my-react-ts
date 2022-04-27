// import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import About from './Pages/About/About';
import TodoList from './Pages/TodoList/TodoList';
// import Demo from './Pages/ReactUse/Demo';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <header>
        {/* <About /> */}
        <TodoList />
        {/* <Demo /> */}
      </header>
    </div>
  );
}

export default App;
