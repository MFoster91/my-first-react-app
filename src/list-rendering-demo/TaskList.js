import { useState } from 'react';

function TaskList() {
    const [tasks, setTasks] = useState([
        'Learn React',
        'Build a project',
        'Apply for jobs'
    ]);

    const [newTask, setNewTask] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();

    const trimmedTask = newTask.trim();
    if(!trimmedTask) return;

    setTasks([...tasks, trimmedTask]);
    setNewTask('');
    };

    const removeTask =(taskToRemove) => {
        setTasks(tasks.filter(task => task !== taskToRemove));
    };

    return (
        <div>
            <form onSubmit={handleAddTask}>
                <input 
                type="text" 
                placeholder="New task"
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)}/>
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {tasks.map(task => (
                    <li key={task}>
                    {task}
                    <button onClick={() => removeTask(task)} style={{ marginLeft: '10px' }}>
                    Remove
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;