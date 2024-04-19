import Board from "./components/Board";
import Input from "./components/Input";
import { useState } from "react";


function App() {

  const [taskList, setTaskList] = useState([]);
  
  return (
    <div>
      <div className="flex flex-col items-center justify-center pt-8 ">
    <h1>TO DO BOARD</h1>
    <Input taskList={taskList} setTaskList={setTaskList}/>
    <div>
      
    </div>
    {taskList.map((task, index) => 
        <Board
        key={index}
        task={task}
        index= {index}
        taskList={taskList}
        setTaskList={setTaskList}
        />
      )}
    </div>
    </div>
  );
}

export default App;
