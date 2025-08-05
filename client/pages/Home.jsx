import React from 'react';

const Home = () => {
  return (
    <main style={styles.container}>
      <h1>Welcome to Joinin</h1>
      <p>This is the homepage of your app.</p>
    </main>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
};

export default Home;