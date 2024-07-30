// import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Task = ({ task, onUpdate, onToggle }) => {
//   // State to manage editing mode
//   const [isEditing, setIsEditing] = useState(false);
//   // State to hold the title and description while editing
//   const [title, setTitle] = useState(task.title);
//   const [description, setDescription] = useState(task.description);
//   // State to manage expansion of task details
//   const [isExpanded, setIsExpanded] = useState(false);

//   // Handle task update
//   const handleUpdate = () => {
//     if (!title || !description) {
//       return toast.error('Please fill in all fields'); // Show error if fields are empty
      
//     }
//     else{
//     const updatedTask = {
//       ...task,
//       title,
//       description,
//       lastUpdated: new Date().toISOString(), // Update last updated timestamp
//     };
   
//     onUpdate(task.id, updatedTask); // Call parent update function
//     toast.success('Task updated successfully'); // Show success message
//     setIsEditing(false); // Exit editing mode
//   }
//   };

//   // Toggle expansion of task details
//   const handleToggleExpand = () => {
//     setIsExpanded(!isExpanded);
//     if (isEditing) {
//       setIsEditing(false); // Exit editing mode if expanded
//     }
//   };

//   // Toggle editing mode
//   const handleEditClick = (e) => {
//     e.stopPropagation(); // Prevent event from bubbling up
//     setIsEditing(!isEditing); // Toggle editing state
//     if (!isEditing) {
//       setIsExpanded(true); // Expand if entering edit mode
//     }
//   };

//   // Toggle task completion status
//   const handleToggleClick = (e) => {
//     e.stopPropagation(); // Prevent event from bubbling up
//     onToggle(task.id); // Call parent toggle function
//   };

//   return (
//     <div className="task p-4 rounded-md bg-white shadow-md transition-all duration-300 hover:shadow-2xl">
//       <div className="flex justify-between items-center cursor-pointer" onClick={handleToggleExpand}>
//         <div>
//           <h4 className={`font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
//             {title} {/* Display task title */}
//           </h4>
//         </div>
//         <div className="flex items-center space-x-2">
//           {/* Button to toggle task completion */}
//           <button
//             onClick={handleToggleClick}
//             className={`toggle-btn p-2 rounded-md ${task.completed ? 'bg-red-500' : 'bg-green-500'} text-white`}
//           >
//             {task.completed ? 'Undo' : 'Done'}
//           </button>
//           {/* Button to enter or exit editing mode */}
//           {isEditing ? (
//             <button
//               onClick={handleEditClick}
//               className="p-2 rounded-md bg-green-800 text-white edit-btn"
//             >
//               Cancel
//             </button>
//           ) : (
//             <button
//               onClick={handleEditClick}
//               className="p-2 rounded-md bg-yellow-500 text-white edit-btn"
//             >
//               Edit
//             </button>
//           )}
//         </div>
//       </div>
//       {/* Conditional rendering of task details */}
//       <div className={`transition-all duration-500 ease-in-out`}>
//         {isExpanded && (
//           <div className="mt-2">
//             {isEditing ? (
//               <>
//                 {/* Input fields for editing task title and description */}
//                 <input
//                   type="text"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                   className="w-full p-2 rounded-md border border-gray-300 mb-2"
//                 />
//                 <textarea
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   className="w-full p-2 rounded-md border border-gray-300 mb-2"
//                 />
//                 <button
//                   onClick={handleUpdate}
//                   className="w-full p-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-300"
//                 >
//                   Save
//                 </button>
//               </>
//             ) : (
//               <>
//                 {/* Display task description and last updated timestamp */}
//                 <p className={`text-gray-600 mb-2 ${task.completed ? 'text-gray-500' : ''}`}>{description}</p>
//                 <div className="text-sm text-gray-500">
//                   Last updated: {new Date(task.lastUpdated).toLocaleString()} {/* Format and display last updated date */}
//                 </div>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Task;
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Task = ({ task, onUpdate, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleUpdate = () => {
    if (!editTitle || !editDescription) {
      return toast.error('Please fill in all fields');
    }

    const updatedTask = {
      ...task,
      title: editTitle,
      description: editDescription,
      lastUpdated: new Date().toISOString(),
    };

    onUpdate(task.id, updatedTask);
    toast.success('Task updated successfully');
    setIsEditing(false);
  };

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (isEditing) {
      setIsEditing(false);
      setEditTitle(task.title);
      setEditDescription(task.description);
    }
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    if (isEditing) {
      setEditTitle(task.title);
      setEditDescription(task.description);
    }
    setIsEditing(!isEditing);
    if (!isEditing) {
      setIsExpanded(true);
    }
  };

  const handleToggleClick = (e) => {
    e.stopPropagation();
    onToggle(task.id);
  };

  return (
    <div className="task p-4 rounded-md bg-white shadow-md transition-all duration-300 hover:shadow-2xl">
      <div className="flex justify-between items-center cursor-pointer" onClick={handleToggleExpand}>
        <div>
          <h4 className={`font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {task.title}
          </h4>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleToggleClick}
            className={`toggle-btn p-2 rounded-md ${task.completed ? 'bg-red-500' : 'bg-green-500'} text-white`}
          >
            {task.completed ? 'Undo' : 'Done'}
          </button>
          {isEditing ? (
            <button
              onClick={handleEditClick}
              className="p-2 rounded-md bg-red-500 text-white edit-btn"
            >
              Cancel
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
      <div className={`transition-all duration-500 ease-in-out`}>
        {isExpanded && (
          <div className="mt-2">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="w-full p-2 rounded-md border border-gray-300 mb-2"
                />
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
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
                <p className={`text-gray-600 mb-2 ${task.completed ? 'text-gray-500' : ''}`}>{task.description}</p>
                <div className="text-sm text-gray-500">
                  Last updated: {new Date(task.lastUpdated).toLocaleString()}
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
