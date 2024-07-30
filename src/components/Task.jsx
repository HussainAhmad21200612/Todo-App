import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Task = ({ task, onUpdate, onToggle }) => {
  // State to manage editing mode
  const [isEditing, setIsEditing] = useState(false);
  // State to hold the title and description while editing
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  // State to manage expansion of task details
  const [isExpanded, setIsExpanded] = useState(false);

  // Handle task update
  const handleUpdate = () => {
    const updatedTask = {
      ...task,
      title,
      description,
      lastUpdated: new Date().toISOString(), // Update last updated timestamp
    };
    if (!title || !description) {
      toast.error('Please fill in all fields'); // Show error if fields are empty
      return;
    }
    onUpdate(task.id, updatedTask); // Call parent update function
    toast.success('Task updated successfully'); // Show success message
    setIsEditing(false); // Exit editing mode
  };

  // Toggle expansion of task details
  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (isEditing) {
      setIsEditing(false); // Exit editing mode if expanded
    }
  };

  // Toggle editing mode
  const handleEditClick = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setIsEditing(!isEditing); // Toggle editing state
    if (!isEditing) {
      setIsExpanded(true); // Expand if entering edit mode
    }
  };

  // Toggle task completion status
  const handleToggleClick = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    onToggle(task.id); // Call parent toggle function
  };

  return (
    <div className="task p-4 rounded-md bg-white shadow-md transition-all duration-300 hover:shadow-2xl">
      <div className="flex justify-between items-center cursor-pointer" onClick={handleToggleExpand}>
        <div>
          <h4 className={`font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {title} {/* Display task title */}
          </h4>
        </div>
        <div className="flex items-center space-x-2">
          {/* Button to toggle task completion */}
          <button
            onClick={handleToggleClick}
            className={`toggle-btn p-2 rounded-md ${task.completed ? 'bg-red-500' : 'bg-green-500'} text-white`}
          >
            {task.completed ? 'Undo' : 'Done'}
          </button>
          {/* Button to enter or exit editing mode */}
          {isEditing ? (
            <button
              onClick={handleUpdate}
              className="p-2 rounded-md bg-green-800 text-white edit-btn"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEditClick}
              className="p-2 rounded-md bg-yellow-500 text-white edit-btn"
            >
              Edit
            </button>
          )}
        </div>
      </div>
      {/* Conditional rendering of task details */}
      <div className={`transition-all duration-500 ease-in-out`}>
        {isExpanded && (
          <div className="mt-2">
            {isEditing ? (
              <>
                {/* Input fields for editing task title and description */}
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 rounded-md border border-gray-300 mb-2"
                />
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 rounded-md border border-gray-300 mb-2"
                />
                <button
                  onClick={handleUpdate}
                  className="w-full p-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-300"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                {/* Display task description and last updated timestamp */}
                <p className={`text-gray-600 mb-2 ${task.completed ? 'text-gray-500' : ''}`}>{description}</p>
                <div className="text-sm text-gray-500">
                  Last updated: {new Date(task.lastUpdated).toLocaleString()} {/* Format and display last updated date */}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
