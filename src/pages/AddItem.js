import React from 'react';
import ItemForm from '../components/ItemForm';
import { createItem } from '../services/api';

const AddItem = () => {
  const handleSubmit = async (data) => {
    await createItem(data);
    window.location.href = '/';
  };

  return (
    <div className="main-content-container">
      <h1 className="edit-item-header">Add Item</h1>
      <div className="form-container">
        <ItemForm initialData={{ name: '', description: '' }} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddItem;
