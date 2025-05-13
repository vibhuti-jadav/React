

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState([]);
  const [to, setTo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  function handleTodo() {
    if (to.trim() === '') return; 

    const obj = {
      id: Math.round(Math.random() * 1000),
      task: to,
      status: false,
    };

    setTodo([...todo, obj]);
    setTo('');
  }

  function handleUpdate(id) {
    const newTodo = todo.map((ele) =>
      ele.id === id ? { ...ele, status: !ele.status } : ele
    );
    setTodo(newTodo);
  }

  function handleDelete(id) {
    const newTodo = todo.filter((ele) => ele.id !== id);
    setTodo(newTodo);
  }

  function handleEdit(id, task) {
    setEditingId(id);
    setEditingText(task);
  }

  function handleEditChange(e) {
    setEditingText(e.target.value);
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    if (editingText.trim() === '') return;

    const updatedTodo = todo.map((item) =>
      item.id === editingId ? { ...item, task: editingText } : item
    );
    setTodo(updatedTodo);
    setEditingId(null);
    setEditingText('');
  }

  return (
    <>
      <div className="w-5xl m-auto gap-4 p-4">
        <div className="flex gap-12">
          <input
            type="text"
            id="small-input"
            onChange={(e) => setTo(e.target.value)}
            value={to}
            className="block w-3xl p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button
            type="button"
            onClick={handleTodo}
            className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-8 py-3 text-center align-middle me-2 mb-2"
          >
            Add
          </button>
        </div>
      </div>

      <div className="  rounded w-5xl my-5 gap-5 flex flex-col  mx-auto">
        {todo.map((ele) => (
          <div key={ele.id} className="flex rounded-3xl gap-x-50 p-3 gap-y-5 border items-center">
            {editingId === ele.id ? (
              <form onSubmit={handleEditSubmit} className="flex-grow">
                <input
                  type="text"
                  value={editingText}
                  onChange={handleEditChange}
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </form>
            ) : (
              <h3 className="font-bold pl-2 text-2xl flex-grow tracking-tight text-gray-500 md:text-lg dark:text-gray-400">{ele.task}</h3>
            )}

            {editingId !== ele.id && (
              <>
                <button
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium text-sm px-5 py-2.5 text-center p-1 rounded-md"
                  onClick={() => handleUpdate(ele.id)}
                >
                  {ele.status ? 'Completed' : 'Not Completed'}
                </button>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
                  onClick={() => handleEdit(ele.id, ele.task)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
                  onClick={() => handleDelete(ele.id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;