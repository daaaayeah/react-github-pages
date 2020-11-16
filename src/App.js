import Header from './Header';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <div style={{ height: '100%', overflowY: 'scroll' }}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
