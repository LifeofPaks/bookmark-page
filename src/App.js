
import './App.scss';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Newsletter from './components/Newsletter/Newsletter';

function App() {
  return (
    <main className="App">
        <Home/>
        <Main/>
        <Newsletter/>
        <Footer/>
    </main>
  );
}

export default App;
