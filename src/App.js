
import './App.scss';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Newsletter from './components/Newsletter/Newsletter';

function App() {
  return (
    <div className="App">
        <Home/>
        <Main/>
        <Newsletter/>
        <Footer/>
    </div>
  );
}

export default App;
