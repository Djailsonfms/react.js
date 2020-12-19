import Menu from './components/menu';
import Router from './router';
import Footer from './components/footer/footer'

import { BrowserRouter} from 'react-router-dom';

import { Container } from 'react-bootstrap';

import './style.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu/>
        </header>
        <main>
          <Container fluid>
            <Router/>
          </Container>
        </main>
          <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
