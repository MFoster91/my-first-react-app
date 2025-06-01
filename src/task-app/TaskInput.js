import { useState } from "react";


function TaskInput({ addTask }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedInput = input.trim();
        if (!trimmedInput) return;

        addTask(trimmedInput);
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="New Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskInput;