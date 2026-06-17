import React from 'react';
import TaskItem from './TaskItem';

function TaskList({tasks, onToggleComplete, onDelete, onEdit}) {
    if (tasks.length === 0) {
        return <p className='empty-message'>No Tasks available. Please add some tasks.</p>
    }

    return (
        <ul className='task-list'>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </ul>
    );
}

export default TaskList;