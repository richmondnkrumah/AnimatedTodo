// src/components/Categories.jsx
import React, { useState } from 'react';
import useStore from '../store';
import Tags from './Tags';

const Categories = () => {
  const categories = useStore((state) => state.categories);
  const addCategory = useStore((state) => state.addCategory);

  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleAddCategory = () => {
    if (newCategoryName.trim()) {
      addCategory(newCategoryName);
      setNewCategoryName('');
      setIsAddingCategory(false);
    }
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
      {isAddingCategory ? (
        <div>
          <input
            type="text"
            placeholder="Enter category name"
            value={newCategoryName}
            onChange={(e) => setNewCategoryName(e.target.value)}
          />
          <button onClick={handleAddCategory}>Add</button>
          <button onClick={() => setIsAddingCategory(false)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setIsAddingCategory(true)}>Add Category</button>
      )}

      <Tags />
    </div>
  );
};

export default Categories;
