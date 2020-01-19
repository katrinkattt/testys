import React from 'react';
import Container from './components/container';
import Footer from './components/footer.jsx';


function App() {
  return (
    <div className="App">
      <section>
        <Container />
      </section>
      <footer>
        <Footer text="please take me to work" />
      </footer>
    </div>
  );
}

export default App;
