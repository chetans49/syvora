import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ItemList = ({ items, onDelete }) => (
  <div className="item-list">
    <h1 className='home-page'>Item List</h1>
    <div className="cards-container">
      {items.map((item) => (
        <div className="item-card" key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <button className="delete-button" onClick={() => onDelete(item.id)}>
            Delete
          </button>
          <Link className="primary-button" to={`/items/edit/${item.id}`}>
            Edit
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default ItemList;
