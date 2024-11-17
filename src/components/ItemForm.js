import React, { useState } from 'react';

const ItemForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="description">Description: </label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default ItemForm;
