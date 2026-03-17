import './App.css';
import { FC, useState } from 'react';

const App: FC = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [submitted, setSubmitted] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(`Hello, ${name}! Welcome to our interactive React app.`);
      setName('');
    }
  };

  const containerClass = isDarkMode ? 'bg-dark text-white' : 'bg-light';

  return (
    <div className={`${containerClass} min-vh-100 py-5`}>
      <div className="container my-5">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-md-12 text-center d-flex flex-column justify-content-center align-items-center">
            <div className="mb-3">
              <h1 className="mb-2 text-primary">React App</h1>
              <p className="text-muted">Experience interactivity with state management</p>
            </div>
            <button
              className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'}`}
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>

        {/* Counter Section */}
        <div className="row mt-4">
          <div className="col-md-6">
            <div className={`card ${isDarkMode ? 'bg-secondary' : ''}`}>
              <div className="card-body">
                <h5 className="card-title">Counter App</h5>
                <p className="card-text">Interactive click counter with state management</p>
                <div className="mb-3">
                  <h2 className="text-center text-primary mb-3">{count}</h2>
                  <div className="btn-group d-grid gap-2" role="group">
                    <button className="btn btn-success" onClick={handleIncrement}>
                      + Increment
                    </button>
                    <button className="btn btn-warning" onClick={handleReset}>
                      Reset
                    </button>
                    <button className="btn btn-danger" onClick={handleDecrement}>
                      - Decrement
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="col-md-6">
            <div className={`card ${isDarkMode ? 'bg-secondary' : ''}`}>
              <div className="card-body">
                <h5 className="card-title">Welcome Form</h5>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label">
                      Enter your name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameInput"
                      placeholder="Your name here..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </form>
                {submitted && (
                  <div className="alert alert-info mt-3" role="alert">
                    {submitted}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;