import { FC, useState } from 'react';

interface CardProps {
  isDarkMode?: boolean;
}

const Card: FC<CardProps> = ({ isDarkMode = false }) => {
  const [items, setItems] = useState<string[]>(['React', 'TypeScript', 'Bootstrap']);
  const [newItem, setNewItem] = useState<string>('');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const handleAddItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
    setFavorites((prev) => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  const toggleFavorite = (index: number) => {
    setFavorites((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className={`card ${isDarkMode ? 'bg-secondary' : ''}`}>
      <div className="card-body">
        <h5 className="card-title">My Skills List</h5>
        <p className="card-text">Add, remove, and mark your favorite skills</p>

        {/* Add Item */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add new skill..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddItem()}
          />
          <button className="btn btn-outline-primary" onClick={handleAddItem}>
            Add +
          </button>
        </div>

        {/* Items List */}
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                isDarkMode ? 'bg-dark text-white' : ''
              }`}
            >
              {favorites.has(index) ? '⭐' : '☆'} {item}
              <div>
                <button
                  className={`btn btn-sm ${favorites.has(index) ? 'btn-warning' : 'btn-outline-warning'}`}
                  onClick={() => toggleFavorite(index)}
                  title="Toggle favorite"
                >
                  ★
                </button>
                <button
                  className="btn btn-sm btn-outline-danger ms-2"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>

        <p className="text-muted mt-3 mb-0">
          Total items: <strong>{items.length}</strong> | Favorites:{' '}
          <strong>{favorites.size}</strong>
        </p>
      </div>
    </div>
  );
};

export default Card;