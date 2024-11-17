import React, { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';
import { getItems, deleteItem } from '../services/api';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getItems();
        setItems(data);
      } catch (err) {
        setError('Failed to fetch items. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      setItems(items.filter((item) => item.id !== id));
    } catch (err) {
      setError('Failed to delete item. Please try again later.');
    }
  };

  if (loading) return <div>Loading...</div>; // Show loading
  if (error) return <div>{error}</div>; // Show error message

  return <ItemList items={items} onDelete={handleDelete} />;
};

export default Home;
