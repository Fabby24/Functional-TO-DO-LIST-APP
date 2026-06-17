import React from 'react';
import { useState } from 'react';

function TaskForm({onAddTask}) {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            onAddTask(task);
            setTask('');
        }
    };

    return(
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit" className='btn btn-add'>Add Task</button>
        </form>
    )
}

export default TaskForm;