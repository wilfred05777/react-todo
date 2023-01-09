import { useState } from "react";

// custom components
import CustomForm from "./components/CustomForm";
import ErdoScheduler from "./components/erdoSchuduler";
import TaskLists from "./components/TaskLists";

function App() {
  // shared state
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    // console.log(task)
    setTasks((prevState) => [...prevState, task]);
  };

  // const addSchedule = (schedule) =>{
  //   console.log(schedule)
  // }

  return (
    <div className="container">
      <header>
        <h2>My Task list</h2>
      </header>
      <CustomForm addTask={addTask} />
      {tasks && <TaskLists tasks={tasks} />}
      {/* <ErdoScheduler addSchedule={addSchedule}/> */}
    </div>
  );
}

export default App;
// https://github.com/coding-in-public/react-todo-app-with-local-storage

// https://www.youtube.com/watch?v=7u2Rv4HfCYQ
