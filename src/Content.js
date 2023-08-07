import React, { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import './Content.css';

const Content = () => {
  const [items, setItems] = useState([]);

  const [newTask, setNewTask] = useState("");

  const handleChange = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('todolist', JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleAdd = () => {
    if (newTask.trim() !== "") {
      const newId = items.length > 0 ? items[items.length - 1].id + 1 : 1;
      const newItem = {
        id: newId,
        checked: false,
        item: newTask
      };
      setItems([...items, newItem]);
      setNewTask("");
    }
  }

  return (
    <main>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Your Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="button add-button" onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {items.map((item) => (
          <li className={`item ${item.checked ? 'checked' : ''}`} key={item.id}>
            <div className="checkbox-container">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleChange(item.id)}
              />
              <span className="checkmark"></span>
            </div>
            <label onClick={() => handleChange(item.id)}>{item.item}</label>
            <button className="button delete-button" onClick={() => handleDelete(item.id)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
