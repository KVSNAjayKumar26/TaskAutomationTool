import { List, ListItem, ListItemText } from '@mui/material'
import React, { useState } from 'react'

const TaskList = () => {
    const [tasks] = useState([
        { "id": 1, "name": "Task 1", "status": "Pending" },
        { "id": 2, "name": "Task 2", "status": "Completed" },
        { "id": 3, "name": "Task 3", "status": "In Progress" },
        { "id": 4, "name": "Task 4", "status": "Pending" },
        { "id": 5, "name": "Task 5", "status": "Completed" },
        { "id": 6, "name": "Task 6", "status": "In Progress" },
        { "id": 7, "name": "Task 7", "status": "Pending" },
        { "id": 8, "name": "Task 8", "status": "Completed" },
        { "id": 9, "name": "Task 9", "status": "In Progress" },
        { "id": 10, "name": "Task 10", "status": "Pending" }
    ])
    return (
        <List>
            {tasks.map((task) => (
                <ListItem key={task.id}>
                    <ListItemText primary={task.name} secondary={`Status: ${task.status}`} />
                </ListItem>
            ))}
        </List>
    );
};

export default TaskList;