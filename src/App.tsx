import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import About from './Pages/About/About';
import TodoList from './Pages/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <About /> */}
        <TodoList />
      </header>
    </div>
  );
}

export default App;
