import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/api/images')  // Will proxy to backend in dev
      .then(res => res.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div className="App">
      <h1>🌿 Town Retreat 🌿</h1>
      {images.map((item, idx) => (
        <div key={idx}>
          <img src={item.url} alt="Nature" style={{ width: '100%', maxWidth: '600px' }} />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
