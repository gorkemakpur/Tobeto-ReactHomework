import { Container } from 'semantic-ui-react';
import './App.css';
import Dashboard from './Layouts/Dashboard';
//semantic ui için import ediyoruz
import 'semantic-ui-css/semantic.min.css'
import Navi from './Layouts/Navi';

function App() {
  return (
    <div className="App"> 
  
    <Navi></Navi>
    <Container className='main'>
    <Dashboard></Dashboard>
    </Container>
    </div>
  );
}

export default App;
