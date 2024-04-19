const Board = ({task ,index, setTaskList, taskList}) => {
    
    const removeTask = () => {
        let removeIndex =taskList.indexOf(task);
        taskList.splice(removeIndex,1);
        setTaskList((currentTasks => currentTasks.filter(todo => index === removeIndex)))
    }
    
    return (
        <>
            <div className="bg-black">
                <p>{task}</p>
            </div>
            <button onClick={removeTask}>Delete</button>
        </>
    );
}
export default Board;