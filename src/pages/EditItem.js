import React, { useEffect, useState } from 'react';
import ItemForm from '../components/ItemForm';
import { getItem, updateItem } from '../services/api';
import { useParams } from 'react-router-dom';
import '../App.css';

const EditItem = () => {
  const { id } = useParams(); // Use useParams to get the id from the URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (id) {
      getItem(id).then(setItem); // Fetch the item by its id
    }
  }, [id]);

  const handleSubmit = async (data) => {
    await updateItem(id, data); // Update the item using the id from the URL
    window.location.href = '/';
  };

  return item ? (
    <div className="main-content-container">
      <h1 className="edit-item-header">Edit Item</h1>
      <ItemForm initialData={item} onSubmit={handleSubmit} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default EditItem;
