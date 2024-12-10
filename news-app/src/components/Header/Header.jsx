import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>📰 NewsApp</div>
      <nav style={styles.nav}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#categories" style={styles.link}>Categories</a>
        <a href="#about" style={styles.link}>About</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',  // Vertically center both logo and nav
    width: '100%',
    padding: '0.25rem 1rem', // Reduced padding for a shorter height
    backgroundColor: '#333',
    color: '#fff',
    boxSizing: 'border-box',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
    marginLeft: 'auto', // Pushes the nav to the right
    alignItems: 'center',  // Ensures the nav items are centered vertically
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'color 0.3s',
  },
};

export default Header;
