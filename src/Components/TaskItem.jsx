import react from 'react';
import {useState} from 'react';

function TaskItem ({task, onToggleComplete, onDelete, onEdit}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);

    const handleEditSubmit = (e) => {
        e.preventDefault();
        onEdit(task.id, editTitle);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditTitle(task.title);
    };

    return(
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
                className='task-checkbox'/>
                {isEditing ? (
                    <form onSubmit={handleEditSubmit} className='edit-form'>
                        <input
                            type="text"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            className='edit-input'
                            autoFocus
                        />
                        <button type="submit" className='btn btn-save'>Save</button>
                        <button type="button" className='btn btn-cancel' onClick={handleCancel}>
                            Cancel
                        </button>
                    </form>
                ) : (
                    <span className='task-title' onDoubleClick={() => setIsEditing(true)}>
                        {task.title}
                    </span>
                )}
                <div className='task-actions'>
                    {!isEditing && (
                        <>
                        <button className='btn btn-edit' onClick={() => setIsEditing(true)}>
                            Edit
                        </button>
                        <button className='btn btn-delete' onClick={() => onDelete(task.id)}>
                            Delete
                        </button>
                        </>
                    )}
                </div>
        </div>
    )
}

export default TaskItem;
