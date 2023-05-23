import './components/styles.css'
import './App.css';
import Navbar from './components/NavBar';
import Greeter from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeter titulo="¡Bienvenidos a Book Storage!" parrafo="¡Descubre un mundo de conocimiento en nuestra librería online! Encuentra los mejores libros en todas las categorías imaginables y sumérgete en historias cautivadoras, aprendizaje fascinante y descubrimientos asombrosos." />
    </div>
  );
}

export default App;
