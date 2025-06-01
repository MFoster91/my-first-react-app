function TaskList({ tasks, removeTask }) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task}>
                    {task}
                <button type="button"
                    onClick={() => removeTask(task)}  
                    style={{ marginLeft: '10px'}}>
                    removeTask
                </button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;