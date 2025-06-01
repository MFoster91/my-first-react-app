import { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskInput from './TaskInput';

function TaskApp() {
    const [tasks, setTasks] = useState(()=> {
        //Load tasks from localStorage when the app starts
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (taskToRemove) => {
        setTasks(tasks.filter(task => task !== taskToRemove));
    };

    // Save tasks to localStorage whenever tasks change
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


    return (
        <div>
            <h1>Task Manager</h1>
            <TaskInput addTask={addTask} />
            <TaskList tasks={tasks} removeTask={removeTask} />
        </div>
    );
}

export default TaskApp;