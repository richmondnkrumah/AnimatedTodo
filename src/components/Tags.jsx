// src/components/Tags.jsx
import React, { useState } from 'react';
import useStore from '../store';

const Tags = () => {
  const tags = useStore((state) => state.tags);
  const addTag = useStore((state) => state.addTag);
  const deleteTag = useStore((state) => state.deleteTag);

  const [isAddingTag, setIsAddingTag] = useState(false);
  const [newTagName, setNewTagName] = useState('');

  const handleAddTag = () => {
    if (newTagName.trim()) {
      addTag(newTagName);
      setNewTagName('');
      setIsAddingTag(false);
    }
  };

  return (
    <div>
      <h2>Tags</h2>
      <ul>
        {tags.map((tag) => (
          <li key={tag.id}>
            {tag.name}
            <button onClick={() => deleteTag(tag.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {isAddingTag ? (
        <div>
          <input
            type="text"
            placeholder="Enter tag name"
            value={newTagName}
            onChange={(e) => setNewTagName(e.target.value)}
          />
          <button onClick={handleAddTag}>Add</button>
          <button onClick={() => setIsAddingTag(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setIsAddingTag(true)}>Add Tag</button>
      )}
    </div>
  );
};

export default Tags;
