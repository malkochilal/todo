import { useState } from 'react';
import './App.css';
// import Header from "./components/Header";
import List from "./components/List";
import Input from "./components/Input";

function App() {
  const [todos, setTodos] = useState(["Learn React"]);
  return (
    <div className="App">
      <section className="todoApp">
        <Input addTodos={setTodos} todos={todos} />
        <List setDone={setTodos} todos={todos} />


      </section>

    </div>
  );
}

export default App;
