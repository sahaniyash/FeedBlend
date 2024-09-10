import React, { useState } from 'react';

const HomePage = () => {
  const [selectedPage, setSelectedPage] = useState('home');

  const renderContent = () => {
    switch (selectedPage) {
      case 'home':
        return <h1>Welcome to the Home Page!</h1>;
      case 'about':
        return <h1>About Us</h1>;
      case 'contact':
        return <h1>Contact Us</h1>;
      default:
        return <h1>Welcome to the Home Page!</h1>;
    }
  };

  return (
    <div>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <button style={styles.button} onClick={() => setSelectedPage('home')}>Home</button>
          </li>
          <li style={styles.navItem}>
            <button style={styles.button} onClick={() => setSelectedPage('about')}>About</button>
          </li>
          <li style={styles.navItem}>
            <button style={styles.button} onClick={() => setSelectedPage('contact')}>Contact</button>
          </li>
        </ul>
      </nav>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

const styles = {
  navList: {
    display: 'flex',
    listStyleType: 'none',
    padding: 0,
    backgroundColor: '#f0f0f0',
  },
  navItem: {
    marginRight: '10px',
  },
  button: {
    padding: '10px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
  },
};

export default HomePage;
