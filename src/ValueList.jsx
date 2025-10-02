import React, { useState } from 'react';

function ValueList() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() === '') return;

    setItems([...items, inputValue]);
    setInputValue('');
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Value List</h2>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="....."
        style={{ padding: '8px', width: '70%' }}
      />

      <button onClick={handleAdd} style={{ padding: '8px 12px', marginLeft: '10px' }}>
        Add
      </button>

      <ul style={{ marginTop: '20px' }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            {item}
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: '10px', padding: '4px 8px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ValueList;
