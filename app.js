

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
