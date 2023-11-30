import { useState } from 'react';
import './App.css';
import { Task } from './Task';

function App () {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      isCompleted: false
    };
    setTodoList([...todoList, task]);
  };

  const completeTask = (id) => {
    setTodoList(todoList.map(task => {
      if (task.id === id) {
        // return { ...task, isCompleted: true }; 
        const updatedTask = { ...task, isCompleted: true };
        console.log(updatedTask); // Check if isCompleted is set to true
        return updatedTask;
      }
      return task; 
    }));
  };


  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) =>
      task.id !== id
    ));
  };


  return (
    <div className="App">
      <div className='addTask'>
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map(task => {
          return <Task
            taskName={task.taskName}
            id={task.id}
            isCompleted={task.isCompleted}deleteTask={deleteTask}            
            completeTask={completeTask}
            key={task.id}
          />;

        })}

      </div>

    </div>
  );
}

export default App;
